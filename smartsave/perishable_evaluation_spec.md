# 🍅 Perishable Produce Evaluation and Discount Recommendation Specification

## Overview
This document defines the structure, parameters, rubrics, algorithm, and prompt required to evaluate the **perishable state** of fruits and vegetables and recommend **pricing discounts** based on freshness.

---

## 1. Input Parameters

| Parameter | Type | Description | Example |
|------------|------|-------------|----------|
| `produce_type` | string | Name of the fruit or vegetable | `"Tomato"` |
| `image_reference` | image / url | Image reference for evaluation | `"image_01.jpg"` |
| `days_since_harvest` | integer | Days elapsed since harvest | `4` |
| `storage_condition` | string | Storage environment | `"Room temperature"` |
| `observations` | string | Human notes or metadata | `"Dull skin, minor blemishes"` |

---

## 2. Evaluation Rubric

Each produce item should be rated on the following (0–10 scale).

| Parameter | Description | Indicators | Weight |
|------------|-------------|-------------|---------|
| **Colour** | Brightness and ripeness quality | Deep red/orange vs dull | 0.2 |
| **Firmness** | Resistance to touch | Firm = fresh, Soft = near spoilage | 0.3 |
| **Surface Condition** | Scratches, mold, bruises | Clean = 10, minor blemish = 7, mold = 0 | 0.2 |
| **Smell/Aroma** | Fermented or off-smell reduces score | Normal = 10, sour = 5 | 0.1 |
| **Expected Shelf Life Remaining** | Estimated days based on current condition | Fresh = 10, Overripe = 3 | 0.2 |

**Formula:**  
```
Freshness Score = (Colour×0.2 + Firmness×0.3 + Surface×0.2 + Smell×0.1 + ShelfLife×0.2)
```

---

## 3. Freshness Grading Scale

| Grade | Freshness Score | Description | Shelf Life | Retail Label |
|--------|------------------|--------------|-------------|---------------|
| A | 8.5–10 | Fresh and firm | 5–7 days | "Fresh Pick" |
| B | 7–8.4 | Ripe and good | 2–4 days | "Ripe Today" |
| C | 5–6.9 | Softening, dull colour | 1–2 days | "Use Soon" |
| D | <5 | Overripe, damaged | <1 day | "Process Immediately" |

---

## 4. Discount Recommendation Table

| Grade | Discount (%) | Suggested Use | Buyer Segment |
|--------|---------------|----------------|----------------|
| A | 0–10% | Fresh sale | General retail |
| B | 20–30% | Cooking / kitchen use | Home consumers |
| C | 35–50% | Processing / bulk | Restaurants |
| D | 60%+ | Clearance / compost | Waste partners |

---

## 5. Algorithm for Evaluation

1. **Extract Parameters:**
   - Read visual and textual input.
   - Parse `days_since_harvest`, `storage_condition`, and `observations`.

2. **Analyze Image (if provided):**
   - Detect colour saturation (for ripeness).
   - Detect surface blemishes or cracks.
   - Estimate firmness (optional with AI vision model).

3. **Assign Scores (0–10):**
   - Each parameter gets a numeric score using the rubric above.

4. **Compute Freshness Score:**
   ```
   Freshness Score = (Colour×0.2 + Firmness×0.3 + Surface×0.2 + Smell×0.1 + ShelfLife×0.2)
   ```

5. **Determine Grade and Discount:**
   - Use Grading Scale table.
   - Select discount range from Discount Table.

6. **Generate Output JSON:**

```json
{
  "produce_type": "Tomato",
  "freshness_score": 6.8,
  "grade": "C",
  "shelf_life_days_remaining": 2,
  "discount_recommendation": 40,
  "recommended_label": "Use Soon",
  "notes": "Slightly dull, minor blemishes, still usable for cooking."
}
```

---

## 6. Prompt Template for Cursor / OpenAI

```
You are an AI produce quality inspector and pricing assistant.

Given an image or textual description of a perishable produce item, evaluate its current freshness and recommend an appropriate discount.

Follow these steps:

1. Evaluate the following parameters: Colour, Firmness, Surface Condition, Smell, and Expected Shelf Life.
2. Assign each parameter a score between 0–10 using the provided rubric.
3. Compute the Freshness Score using the formula.
4. Determine Grade (A–D) and Discount (%) based on grading tables.
5. Provide a brief descriptive summary of your reasoning.

Output strictly in this JSON format:

{
  "produce_type": "<produce name>",
  "freshness_score": <calculated score>,
  "grade": "<A/B/C/D>",
  "shelf_life_days_remaining": <integer>,
  "discount_recommendation": <percentage>,
  "recommended_label": "<short label>",
  "notes": "<brief explanation>"
}
```

---

## 7. Example Evaluation

| Input | Output Summary |
|--------|----------------|
| Image: Three dull red tomatoes with minor blemishes | Grade: C, Discount: 35–40%, Shelf Life: 2 days, Label: "Use Soon" |

---

## 8. Future Enhancements

- Add machine vision scoring for colour and firmness.
- Integrate with temperature logs for predictive shelf life.
- Enable dynamic pricing API link to retail systems.
