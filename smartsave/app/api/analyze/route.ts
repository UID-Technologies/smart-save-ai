import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const allowedOrigin = process.env.CORS_ALLOWED_ORIGIN || '*'
const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const withCors = (response: NextResponse) => {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}

export async function OPTIONS() {
  return withCors(
    new NextResponse(null, {
      status: 204,
    })
  )
}

interface AnalyzeRequest {
  image: string
  produce_type: string
  days_since_harvest: number
  storage_condition: string
  observations: string
}

const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured on the server')
  }
  return new OpenAI({ apiKey })
}

export async function POST(request: NextRequest) {
  try {
    const body: AnalyzeRequest = await request.json()
    const { image, produce_type, days_since_harvest, storage_condition, observations } = body

    if (!image || !produce_type) {
      return withCors(
        NextResponse.json(
          { error: 'Image and produce type are required' },
          { status: 400 }
        )
      )
    }

    // Build the prompt based on perishable_evaluation_spec.md
    const prompt = `You are an AI produce quality inspector and pricing assistant.

Given an image or textual description of a perishable produce item, evaluate its current freshness and recommend an appropriate discount.

Follow these steps:

1. Evaluate the following parameters (0-10 scale):
   - Colour: Brightness and ripeness quality (Deep red/orange vs dull) - Weight: 0.2
   - Firmness: Resistance to touch (Firm = fresh, Soft = near spoilage) - Weight: 0.3
   - Surface Condition: Scratches, mold, bruises (Clean = 10, minor blemish = 7, mold = 0) - Weight: 0.2
   - Smell/Aroma: Fermented or off-smell reduces score (Normal = 10, sour = 5) - Weight: 0.1
   - Expected Shelf Life Remaining: Estimated days based on current condition (Fresh = 10, Overripe = 3) - Weight: 0.2

2. Compute the Freshness Score using the formula:
   Freshness Score = (Colour×0.2 + Firmness×0.3 + Surface×0.2 + Smell×0.1 + ShelfLife×0.2)

3. Determine Grade based on Freshness Score:
   - Grade A: 8.5-10 (Fresh and firm, 5-7 days shelf life)
   - Grade B: 7-8.4 (Ripe and good, 2-4 days shelf life)
   - Grade C: 5-6.9 (Softening, dull colour, 1-2 days shelf life)
   - Grade D: <5 (Overripe, damaged, <1 day shelf life)

4. Determine Discount Recommendation based on Grade:
   - Grade A: 0-10% discount
   - Grade B: 20-30% discount
   - Grade C: 35-50% discount
   - Grade D: 60%+ discount

5. Provide recommended label:
   - Grade A: "Fresh Pick"
   - Grade B: "Ripe Today"
   - Grade C: "Use Soon"
   - Grade D: "Process Immediately"

Product Information:
- Produce Type: ${produce_type}
- Days Since Harvest: ${days_since_harvest}
- Storage Condition: ${storage_condition}
- Observations: ${observations || 'None provided'}

Output strictly in this JSON format:
{
  "produce_type": "${produce_type}",
  "freshness_score": <calculated score 0-10>,
  "grade": "<A/B/C/D>",
  "shelf_life_days_remaining": <integer>,
  "discount_recommendation": <percentage 0-70>,
  "recommended_label": "<short label>",
  "notes": "<brief explanation of the evaluation>"
}`

    // Use vision API if image is provided
    const messages: any[] = [
      {
        role: 'system',
        content: 'You are a food retail pricing expert. Always respond with valid JSON only, no additional text.',
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: prompt,
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${image}`,
            },
          },
        ],
      },
    ]

    const openai = getOpenAIClient()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // or 'gpt-4-turbo' if gpt-4o is not available
      messages,
      max_tokens: 500,
      response_format: { type: 'json_object' },
    })

    const content = response.choices[0].message.content
    if (!content) {
      throw new Error('No response from OpenAI')
    }

    const result = JSON.parse(content)

    // Validate and ensure result matches expected format
    const analysisResult = {
      produce_type: result.produce_type || produce_type,
      freshness_score: Math.max(0, Math.min(10, parseFloat(result.freshness_score) || 0)),
      grade: result.grade || 'C',
      shelf_life_days_remaining: parseInt(result.shelf_life_days_remaining) || 0,
      discount_recommendation: Math.max(0, Math.min(70, parseFloat(result.discount_recommendation) || 0)),
      recommended_label: result.recommended_label || 'Use Soon',
      notes: result.notes || 'Analysis completed',
    }

    return withCors(NextResponse.json(analysisResult))
  } catch (error) {
    console.error('Analysis error:', error)
    return withCors(
      NextResponse.json(
        { error: error instanceof Error ? error.message : 'Failed to analyze image' },
        { status: 500 }
      )
    )
  }
}

