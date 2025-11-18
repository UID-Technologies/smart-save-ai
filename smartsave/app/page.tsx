'use client'

import { useState, useRef } from 'react'
import { Camera, Upload, Scan, ChevronDown, ExternalLink } from 'lucide-react'
import FreshnessAnalyzer from '@/components/FreshnessAnalyzer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-primary">SmartSave</div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-sm text-muted-foreground">Food Waste Management</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">AI Freshness Analysis Demo</div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">AI Freshness Analysis</h1>
          <p className="text-muted-foreground">Vision-based perishable item analysis & dynamic pricing</p>
        </div>
        
        <FreshnessAnalyzer />
      </main>
    </div>
  )
}

