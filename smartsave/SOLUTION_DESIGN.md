# Solution Design: Single-Screen Food Waste Management Demo

## Overview

This is a single-screen demo application for food lifecycle management that allows store employees to scan perishable items, evaluate their freshness, and receive AI-powered discount recommendations.

## Design Decisions

### Based on Requirements

1. **perishable_evaluation_spec.md**: 
   - Implements the exact evaluation rubric (Colour, Firmness, Surface Condition, Smell, Shelf Life)
   - Uses the weighted formula: `Freshness Score = (Colour×0.2 + Firmness×0.3 + Surface×0.2 + Smell×0.1 + ShelfLife×0.2)`
   - Follows the grading scale (A-D) and discount recommendations
   - Outputs JSON in the specified format

2. **SmartSave Demo Interface**:
   - Single-screen layout with two-column design
   - Left panel: Image input and product details form
   - Right panel: Analysis results display
   - Clean, modern UI with card-based design
   - Color-coded grade indicators

## Architecture

### Frontend
- **Framework**: Next.js 14 (App Router) with React
- **Styling**: Tailwind CSS with custom color scheme
- **Icons**: Lucide React
- **State Management**: React useState hooks (simple for demo)

### Backend
- **API Route**: Next.js API route (`/api/analyze`)
- **AI Service**: OpenAI GPT-4o with vision capabilities
- **Image Processing**: Base64 encoding for image transmission

### Key Components

1. **FreshnessAnalyzer Component** (`components/FreshnessAnalyzer.tsx`)
   - Handles image upload/camera capture
   - Manages form state
   - Displays analysis results
   - Implements the UI/UX flow

2. **API Route** (`app/api/analyze/route.ts`)
   - Receives image and product details
   - Constructs prompt based on perishable_evaluation_spec.md
   - Calls OpenAI Vision API
   - Validates and formats response

## Workflow

1. **User uploads/captures image** of perishable produce
2. **User enters product details**:
   - Produce Type (required)
   - Days Since Harvest
   - Storage Condition
   - Observations
   - Original Price (optional)
3. **User clicks "Analyze Freshness"**
4. **System sends image + details to OpenAI**:
   - Image analyzed using GPT-4o vision
   - Prompt includes evaluation rubric
   - AI evaluates all 5 parameters
   - Calculates freshness score
   - Determines grade and discount
5. **Results displayed**:
   - Grade badge (A-D) with color coding
   - Freshness score (0-10) with progress bar
   - Discount recommendation with price calculation
   - Shelf life remaining
   - Analysis notes

## AI Prompt Engineering

The prompt is structured to:
- Follow the exact rubric from perishable_evaluation_spec.md
- Evaluate 5 parameters with correct weights
- Calculate freshness score using the formula
- Map score to grade (A-D)
- Recommend discount based on grade
- Provide reasoning and notes

## UI/UX Features

- **Responsive Design**: Works on desktop and mobile
- **Visual Feedback**: Loading states, error messages
- **Color Coding**: 
  - Grade A: Green
  - Grade B: Blue
  - Grade C: Yellow
  - Grade D: Red
- **Progress Indicators**: Freshness score visualization
- **Price Calculation**: Shows original and discounted price

## Limitations (Demo Version)

- Single screen only (no navigation)
- No database persistence
- No authentication
- No barcode scanning (image-based only)
- No location-based discount rules (uses grade-based only)
- No historical tracking

## Future Enhancements

If expanding beyond demo:
- Add database for scan history
- Implement barcode/QR code scanning
- Add location-based discount factors
- Multi-screen navigation
- User authentication
- Analytics dashboard
- Export functionality

## Environment Setup

Requires:
- Node.js 18+
- OpenAI API key
- `.env.local` file with `OPENAI_API_KEY`

## Running the Demo

```bash
npm install
# Add OPENAI_API_KEY to .env.local
npm run dev
```

Open http://localhost:3000

## Testing

To test the demo:
1. Use sample produce images (tomatoes, bananas, etc.)
2. Try different produce types
3. Test with various days since harvest
4. Verify discount recommendations match grade
5. Check that freshness scores are calculated correctly

