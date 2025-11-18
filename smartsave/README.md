# Food Waste Management Demo

A single-screen demo application for AI-powered perishable produce evaluation and discount recommendation.

## Features

- **Image Upload/Camera Capture**: Upload images or capture from device camera
- **Product Details Form**: Enter produce type, harvest date, storage conditions, and observations
- **AI-Powered Analysis**: Uses OpenAI GPT-4 Vision to evaluate freshness based on:
  - Colour (brightness and ripeness)
  - Firmness (resistance to touch)
  - Surface Condition (scratches, mold, bruises)
  - Smell/Aroma
  - Expected Shelf Life Remaining
- **Freshness Grading**: Automatic grading (A-D) with corresponding discount recommendations
- **Dynamic Pricing**: AI-suggested discount percentages based on freshness state

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OpenAI API key to `.env.local`:
```
OPENAI_API_KEY=sk-your-api-key-here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Upload an image or capture from camera
2. Fill in product details:
   - Produce Type (required)
   - Days Since Harvest
   - Storage Condition
   - Observations (optional)
   - Original Price (optional)
3. Click "Analyze Freshness"
4. View results:
   - Freshness Score (0-10)
   - Grade (A-D)
   - Recommended Discount
   - Shelf Life Remaining
   - Analysis Notes

## Grading System

Based on `perishable_evaluation_spec.md`:

- **Grade A** (8.5-10): Fresh and firm, 5-7 days shelf life → 0-10% discount
- **Grade B** (7-8.4): Ripe and good, 2-4 days shelf life → 20-30% discount
- **Grade C** (5-6.9): Softening, dull colour, 1-2 days shelf life → 35-50% discount
- **Grade D** (<5): Overripe, damaged, <1 day shelf life → 60%+ discount

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS
- **AI**: OpenAI GPT-4 Vision API
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts      # OpenAI API integration
│   ├── layout.tsx
│   ├── page.tsx              # Main page
│   └── globals.css
├── components/
│   └── FreshnessAnalyzer.tsx # Main component
├── perishable_evaluation_spec.md
└── package.json
```

## Notes

- This is a demo application with a single screen
- Image analysis uses OpenAI's vision capabilities
- All analysis is performed server-side via API route
- No database storage in this demo version

