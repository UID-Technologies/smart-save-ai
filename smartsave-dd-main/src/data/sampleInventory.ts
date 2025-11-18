export interface InventoryItem {
  id: string;
  name: string;
  category: "fruits" | "vegetables" | "dairy";
  sku: string;
  supplier: string;
  quantity: number;
  unit: string;
  originalPrice: number;
  cost: number;
  location: string;
  receivedDate: string;
  expiryDate: string;
  optimal_temp: string;
  keywords: string[];
}

export const sampleInventory: InventoryItem[] = [
  // Fruits
  {
    id: "F001",
    name: "Organic Bananas",
    category: "fruits",
    sku: "BAN-ORG-001",
    supplier: "Fresh Farms Co.",
    quantity: 150,
    unit: "lbs",
    originalPrice: 0.89,
    cost: 0.45,
    location: "Produce Section A",
    receivedDate: "2025-01-08",
    expiryDate: "2025-01-15",
    optimal_temp: "58-60°F",
    keywords: ["banana", "yellow", "curved", "bunch", "organic"]
  },
  {
    id: "F002",
    name: "Red Delicious Apples",
    category: "fruits",
    sku: "APP-RED-002",
    supplier: "Orchard Valley",
    quantity: 200,
    unit: "lbs",
    originalPrice: 1.99,
    cost: 1.10,
    location: "Produce Section A",
    receivedDate: "2025-01-05",
    expiryDate: "2025-01-25",
    optimal_temp: "30-35°F",
    keywords: ["apple", "red", "round", "delicious", "fruit"]
  },
  {
    id: "F003",
    name: "Fresh Strawberries",
    category: "fruits",
    sku: "STR-FRE-003",
    supplier: "Berry Best Farms",
    quantity: 80,
    unit: "containers",
    originalPrice: 4.99,
    cost: 2.50,
    location: "Produce Section B",
    receivedDate: "2025-01-10",
    expiryDate: "2025-01-14",
    optimal_temp: "32-36°F",
    keywords: ["strawberry", "red", "berry", "berries", "small", "seeds"]
  },
  {
    id: "F004",
    name: "Navel Oranges",
    category: "fruits",
    sku: "ORA-NAV-004",
    supplier: "Citrus Growers Inc.",
    quantity: 175,
    unit: "lbs",
    originalPrice: 1.49,
    cost: 0.75,
    location: "Produce Section A",
    receivedDate: "2025-01-07",
    expiryDate: "2025-01-21",
    optimal_temp: "38-48°F",
    keywords: ["orange", "citrus", "round", "navel", "vitamin"]
  },
  {
    id: "F005",
    name: "Watermelon",
    category: "fruits",
    sku: "WAT-SEE-005",
    supplier: "Summer Harvest",
    quantity: 45,
    unit: "whole",
    originalPrice: 6.99,
    cost: 3.50,
    location: "Produce Section C",
    receivedDate: "2025-01-09",
    expiryDate: "2025-01-16",
    optimal_temp: "50-60°F",
    keywords: ["watermelon", "green", "large", "striped", "melon"]
  },

  // Vegetables
  {
    id: "V001",
    name: "Roma Tomatoes",
    category: "vegetables",
    sku: "TOM-ROM-001",
    supplier: "Garden Fresh Ltd.",
    quantity: 120,
    unit: "lbs",
    originalPrice: 2.49,
    cost: 1.25,
    location: "Produce Section D",
    receivedDate: "2025-01-09",
    expiryDate: "2025-01-16",
    optimal_temp: "55-70°F",
    keywords: ["tomato", "red", "oval", "roma", "vegetable"]
  },
  {
    id: "V002",
    name: "Fresh Lettuce",
    category: "vegetables",
    sku: "LET-GRE-002",
    supplier: "Green Leaf Farms",
    quantity: 90,
    unit: "heads",
    originalPrice: 1.99,
    cost: 0.90,
    location: "Produce Section D",
    receivedDate: "2025-01-10",
    expiryDate: "2025-01-17",
    optimal_temp: "32-35°F",
    keywords: ["lettuce", "green", "leafy", "salad", "leaves"]
  },
  {
    id: "V003",
    name: "Organic Carrots",
    category: "vegetables",
    sku: "CAR-ORG-003",
    supplier: "Root Vegetable Co.",
    quantity: 140,
    unit: "lbs",
    originalPrice: 1.79,
    cost: 0.85,
    location: "Produce Section D",
    receivedDate: "2025-01-08",
    expiryDate: "2025-01-22",
    optimal_temp: "32-40°F",
    keywords: ["carrot", "orange", "long", "root", "organic"]
  },
  {
    id: "V004",
    name: "Bell Peppers (Mixed)",
    category: "vegetables",
    sku: "PEP-MIX-004",
    supplier: "Pepper Growers",
    quantity: 100,
    unit: "lbs",
    originalPrice: 2.99,
    cost: 1.50,
    location: "Produce Section D",
    receivedDate: "2025-01-09",
    expiryDate: "2025-01-16",
    optimal_temp: "45-50°F",
    keywords: ["pepper", "bell", "colorful", "red", "yellow", "green", "vegetable"]
  },
  {
    id: "V005",
    name: "Broccoli Crowns",
    category: "vegetables",
    sku: "BRO-CRO-005",
    supplier: "Green Valley",
    quantity: 75,
    unit: "crowns",
    originalPrice: 2.29,
    cost: 1.15,
    location: "Produce Section D",
    receivedDate: "2025-01-10",
    expiryDate: "2025-01-17",
    optimal_temp: "32-35°F",
    keywords: ["broccoli", "green", "crown", "florets", "vegetable"]
  },

  // Dairy
  {
    id: "D001",
    name: "Whole Milk (Gallon)",
    category: "dairy",
    sku: "MLK-WHO-001",
    supplier: "Dairy Valley",
    quantity: 200,
    unit: "gallons",
    originalPrice: 4.99,
    cost: 2.75,
    location: "Dairy Cooler A",
    receivedDate: "2025-01-09",
    expiryDate: "2025-01-19",
    optimal_temp: "34-38°F",
    keywords: ["milk", "gallon", "white", "jug", "dairy", "whole"]
  },
  {
    id: "D002",
    name: "Greek Yogurt (Plain)",
    category: "dairy",
    sku: "YOG-GRK-002",
    supplier: "Creamy Delights",
    quantity: 150,
    unit: "containers",
    originalPrice: 5.49,
    cost: 2.90,
    location: "Dairy Cooler B",
    receivedDate: "2025-01-08",
    expiryDate: "2025-01-29",
    optimal_temp: "34-38°F",
    keywords: ["yogurt", "greek", "white", "container", "dairy", "culture"]
  },
  {
    id: "D003",
    name: "Cheddar Cheese Block",
    category: "dairy",
    sku: "CHE-CHE-003",
    supplier: "Artisan Cheese Co.",
    quantity: 80,
    unit: "blocks",
    originalPrice: 7.99,
    cost: 4.25,
    location: "Dairy Cooler B",
    receivedDate: "2025-01-07",
    expiryDate: "2025-02-07",
    optimal_temp: "34-38°F",
    keywords: ["cheese", "cheddar", "yellow", "block", "dairy", "aged"]
  },
  {
    id: "D004",
    name: "Butter (Unsalted)",
    category: "dairy",
    sku: "BUT-UNS-004",
    supplier: "Premium Dairy",
    quantity: 120,
    unit: "lbs",
    originalPrice: 5.99,
    cost: 3.25,
    location: "Dairy Cooler A",
    receivedDate: "2025-01-09",
    expiryDate: "2025-03-09",
    optimal_temp: "34-38°F",
    keywords: ["butter", "unsalted", "yellow", "stick", "dairy", "cream"]
  },
  {
    id: "D005",
    name: "Fresh Eggs (Dozen)",
    category: "dairy",
    sku: "EGG-FRE-005",
    supplier: "Happy Hens Farm",
    quantity: 180,
    unit: "cartons",
    originalPrice: 3.99,
    cost: 2.10,
    location: "Dairy Cooler A",
    receivedDate: "2025-01-10",
    expiryDate: "2025-01-31",
    optimal_temp: "33-40°F",
    keywords: ["egg", "eggs", "dozen", "carton", "white", "brown", "shell"]
  },
  {
    id: "D006",
    name: "Heavy Cream",
    category: "dairy",
    sku: "CRE-HEA-006",
    supplier: "Dairy Valley",
    quantity: 95,
    unit: "pints",
    originalPrice: 4.49,
    cost: 2.40,
    location: "Dairy Cooler B",
    receivedDate: "2025-01-09",
    expiryDate: "2025-01-23",
    optimal_temp: "34-38°F",
    keywords: ["cream", "heavy", "white", "carton", "dairy", "whipping"]
  }
];

// Helper function to identify product from image analysis
export function identifyProductFromKeywords(detectedKeywords: string[]): InventoryItem | null {
  const normalizedKeywords = detectedKeywords.map(k => k.toLowerCase());
  
  let bestMatch: InventoryItem | null = null;
  let maxMatches = 0;

  for (const item of sampleInventory) {
    const matches = item.keywords.filter(keyword => 
      normalizedKeywords.some(detected => 
        detected.includes(keyword) || keyword.includes(detected)
      )
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = item;
    }
  }

  return maxMatches >= 1 ? bestMatch : null;
}
