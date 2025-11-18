'use client'

import { useState, useRef } from 'react'
import { Camera, Upload, Scan } from 'lucide-react'

interface AnalysisResult {
  produce_type: string
  freshness_score: number
  grade: 'A' | 'B' | 'C' | 'D'
  shelf_life_days_remaining: number
  discount_recommendation: number
  recommended_label: string
  notes: string
}

export default function FreshnessAnalyzer() {
  const [image, setImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState({
    produce_type: '',
    days_since_harvest: '',
    storage_condition: 'Room temperature',
    observations: '',
    original_price: '',
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
      
      // Try to detect produce type from filename
      const filename = file.name.toLowerCase()
      if (filename.includes('tomato')) setFormData(prev => ({ ...prev, produce_type: 'Tomato' }))
      else if (filename.includes('banana')) setFormData(prev => ({ ...prev, produce_type: 'Banana' }))
      else if (filename.includes('apple')) setFormData(prev => ({ ...prev, produce_type: 'Apple' }))
      else if (filename.includes('lettuce')) setFormData(prev => ({ ...prev, produce_type: 'Lettuce' }))
    }
  }

  const handleAnalyze = async () => {
    if (!imageFile || !formData.produce_type) {
      setError('Please upload an image and enter produce type')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Convert image to base64
      const base64Image = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1]
          resolve(base64)
        }
        reader.readAsDataURL(imageFile)
      })

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64Image,
          produce_type: formData.produce_type,
          days_since_harvest: parseInt(formData.days_since_harvest) || 0,
          storage_condition: formData.storage_condition,
          observations: formData.observations,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Analysis failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze image')
    } finally {
      setLoading(false)
    }
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600 bg-green-50 border-green-200'
      case 'B': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'C': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'D': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getDiscountColor = (discount: number) => {
    if (discount >= 50) return 'text-red-600'
    if (discount >= 30) return 'text-orange-600'
    if (discount >= 15) return 'text-yellow-600'
    return 'text-green-600'
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Panel - Input */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Image Input
          </h3>
          <p className="text-sm text-muted-foreground">Upload an image or use live camera feed</p>
        </div>

        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Scan className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground">No image selected</p>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => cameraInputRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1"
          >
            <Camera className="h-4 w-4" />
            Live Camera
          </button>
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1"
          >
            <Upload className="h-4 w-4" />
            Upload Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Product Details</h4>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Produce Type *</label>
            <input
              type="text"
              value={formData.produce_type}
              onChange={(e) => setFormData(prev => ({ ...prev, produce_type: e.target.value }))}
              placeholder="e.g., Tomato, Banana, Apple"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Days Since Harvest</label>
              <input
                type="number"
                value={formData.days_since_harvest}
                onChange={(e) => setFormData(prev => ({ ...prev, days_since_harvest: e.target.value }))}
                placeholder="0"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Storage Condition</label>
              <select
                value={formData.storage_condition}
                onChange={(e) => setFormData(prev => ({ ...prev, storage_condition: e.target.value }))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="Room temperature">Room temperature</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Frozen">Frozen</option>
                <option value="Controlled atmosphere">Controlled atmosphere</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Observations</label>
            <textarea
              value={formData.observations}
              onChange={(e) => setFormData(prev => ({ ...prev, observations: e.target.value }))}
              placeholder="e.g., Dull skin, minor blemishes"
              rows={2}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Original Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={formData.original_price}
              onChange={(e) => setFormData(prev => ({ ...prev, original_price: e.target.value }))}
              placeholder="0.00"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          {error && (
            <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading || !imageFile || !formData.produce_type}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            <Scan className="h-4 w-4" />
            {loading ? 'Analyzing...' : 'Analyze Freshness'}
          </button>
        </div>
      </div>

      {/* Right Panel - Results */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Analysis Results</h3>
          <p className="text-sm text-muted-foreground">AI-powered freshness assessment & pricing recommendation</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <h4 className="font-semibold mb-2">Analyzing...</h4>
            <p className="text-sm text-muted-foreground">Processing image and evaluating freshness</p>
          </div>
        ) : result ? (
          <div className="space-y-6">
            {/* Grade Badge */}
            <div className={`flex items-center justify-center p-6 rounded-lg border-2 ${getGradeColor(result.grade)}`}>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Grade {result.grade}</div>
                <div className="text-lg font-medium">{result.recommended_label}</div>
              </div>
            </div>

            {/* Freshness Score */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Freshness Score</span>
                <span className="text-2xl font-bold">{result.freshness_score.toFixed(1)}/10</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: `${(result.freshness_score / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Discount Recommendation */}
            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Recommended Discount</span>
                <span className={`text-3xl font-bold ${getDiscountColor(result.discount_recommendation)}`}>
                  {result.discount_recommendation}%
                </span>
              </div>
              {formData.original_price && (
                <div className="text-sm text-muted-foreground mt-2">
                  Original: ${parseFloat(formData.original_price).toFixed(2)} → 
                  <span className="font-semibold text-foreground ml-1">
                    ${(parseFloat(formData.original_price) * (1 - result.discount_recommendation / 100)).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Shelf Life Remaining</span>
                <span className="text-sm font-medium">{result.shelf_life_days_remaining} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Produce Type</span>
                <span className="text-sm font-medium">{result.produce_type}</span>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-muted-foreground mb-1">Analysis Notes</p>
                <p className="text-sm">{result.notes}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Scan className="h-16 w-16 text-muted-foreground mb-4" />
            <h4 className="font-semibold mb-2">No Analysis Yet</h4>
            <p className="text-sm text-muted-foreground max-w-sm">
              Upload or capture an image of a perishable item and provide product details to get AI-powered freshness analysis and pricing recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

