import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Camera, Upload, Scan, TrendingDown, AlertTriangle, Tag, Package, Calendar, DollarSign, Monitor, Maximize, ExternalLink, Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { sampleInventory, identifyProductFromKeywords, type InventoryItem } from "@/data/sampleInventory";

const ANALYZE_API_URL =
  import.meta.env.VITE_ANALYZE_API_URL || "http://localhost:3000/api/analyze";

const GRADE_DISPLAY: Record<
  string,
  { condition: string; color: "green" | "yellow" | "red"; urgency: "high" | "medium" | "low"; label: string }
> = {
  A: { condition: "Excellent", color: "green", urgency: "low", label: "Fresh Pick" },
  B: { condition: "Good", color: "yellow", urgency: "medium", label: "Ripe Today" },
  C: { condition: "Fair", color: "yellow", urgency: "medium", label: "Use Soon" },
  D: { condition: "Poor", color: "red", urgency: "high", label: "Process Immediately" },
};

const MS_PER_DAY = 1000 * 60 * 60 * 24;

type DetectionResult = {
  keywords: string[];
  confidence: number;
  identified: InventoryItem | null;
};

export default function FreshnessAnalysis() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadedFilename, setUploadedFilename] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [identifiedProduct, setIdentifiedProduct] = useState<InventoryItem | null>(null);
  const [testMode, setTestMode] = useState<string>("auto");
  const [detectedKeywords, setDetectedKeywords] = useState<string[]>([]);
  const [detectionConfidence, setDetectionConfidence] = useState<number>(0);
  const [isESLDialogOpen, setIsESLDialogOpen] = useState(false);
  const [isPriceRuleDialogOpen, setIsPriceRuleDialogOpen] = useState(false);
  
  // ESL Dialog form fields
  const [eslProductName, setEslProductName] = useState("");
  const [eslNewPrice, setEslNewPrice] = useState("");
  const [eslDisplayMessage, setEslDisplayMessage] = useState("");
  const [eslDisplayColor, setEslDisplayColor] = useState("");
  
  // Price Rule Dialog form fields
  const [ruleName, setRuleName] = useState("");
  const [ruleProduct, setRuleProduct] = useState("");
  const [ruleCategory, setRuleCategory] = useState("");
  const [ruleCondition, setRuleCondition] = useState("");
  const [ruleThreshold, setRuleThreshold] = useState("");
  const [rulePriceAdjustment, setRulePriceAdjustment] = useState("");
  const [ruleAdjustmentType, setRuleAdjustmentType] = useState("percentage");
  const [ruleAutoApply, setRuleAutoApply] = useState(true);
  
  // Form parameters
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [receivedDate, setReceivedDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [observations, setObservations] = useState("");
  
  // Analysis results
  const [analysisResult, setAnalysisResult] = useState<{
    freshness: number;
    shelfLife: number;
    suggestedPrice: number;
    priceReduction: number;
    condition: string;
    factors: string[];
    eslActions: string[];
    displayRecommendations: {
      color: string;
      message: string;
      urgency: "high" | "medium" | "low";
    };
    source: "ai" | "demo";
    grade?: string;
    recommendedLabel?: string;
    notes?: string;
    produceType?: string;
    originalPrice?: number | null;
  } | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFilename(file.name.toLowerCase());
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Reset previous analysis
      setAnalysisResult(null);
      setIdentifiedProduct(null);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment', width: 1280, height: 720 } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCameraActive(true);
      toast({
        title: "Camera started",
        description: "Position the item in the frame and capture",
      });
    } catch (error) {
      toast({
        title: "Camera error",
        description: "Could not access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setImagePreview(imageData);
        stopCamera();
      }
    }
  };

  const getDaysUntilExpiry = (product?: InventoryItem | null) => {
    const reference = product?.expiryDate || expiryDate;
    if (!reference) {
      return Math.floor(Math.random() * 10) + 2;
    }
    return Math.max(0, Math.floor((new Date(reference).getTime() - Date.now()) / MS_PER_DAY));
  };

  const getDaysInStorage = (product?: InventoryItem | null) => {
    const reference = product?.receivedDate || receivedDate;
    if (!reference) {
      return Math.floor(Math.random() * 5) + 1;
    }
    return Math.max(0, Math.floor((Date.now() - new Date(reference).getTime()) / MS_PER_DAY));
  };

  const determineStorageCondition = () => {
    const normalizedLocation = location.toLowerCase();
    if (
      category === "dairy" ||
      normalizedLocation.includes("cooler") ||
      normalizedLocation.includes("refriger") ||
      normalizedLocation.includes("fridge")
    ) {
      return "Refrigerated";
    }
    if (normalizedLocation.includes("freezer") || normalizedLocation.includes("frozen")) {
      return "Frozen";
    }
    return "Room temperature";
  };

  const buildObservationNote = (keywords: string[]) => {
    if (observations.trim()) {
      return observations.trim();
    }
    const segments: string[] = [];
    if (keywords.length) {
      segments.push(`Detected keywords: ${keywords.join(", ")}`);
    }
    if (quantity) {
      segments.push(`Qty ${quantity}`);
    }
    if (location) {
      segments.push(`Location: ${location}`);
    }
    if (supplier) {
      segments.push(`Supplier: ${supplier}`);
    }
    if (expiryDate) {
      segments.push(`Expiry: ${expiryDate}`);
    }
    return segments.join(" | ") || "No additional observations provided";
  };

  const performDetection = (): DetectionResult => {
    const simulatedKeywords = [
      "red", "round", "fruit", "fresh", "tomato", "vegetable",
      "banana", "yellow", "apple", "orange", "strawberry", "lettuce", "green",
      "milk", "dairy", "carton", "cheese", "eggs", "yogurt"
    ];

    const pickRandomKeywords = () =>
      simulatedKeywords
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 3 + Math.floor(Math.random() * 3));

    let keywords: string[] = [];
    let confidence = 0;

    if (testMode === "bananas") {
      keywords = ["banana", "yellow", "fruit"];
      confidence = 94;
    } else if (testMode === "tomatoes") {
      keywords = ["tomato", "red", "vegetable"];
      confidence = 91;
    } else if (testMode === "milk") {
      keywords = ["milk", "dairy", "white"];
      confidence = 89;
    } else if (testMode === "random") {
      keywords = pickRandomKeywords();
      confidence = 70 + Math.floor(Math.random() * 20);
    } else {
      const filename = uploadedFilename;
      if (filename.includes("banana")) {
        keywords = ["banana", "yellow", "fruit"];
        confidence = 94;
      } else if (filename.includes("tomato")) {
        keywords = ["tomato", "red", "vegetable"];
        confidence = 91;
      } else if (filename.includes("milk")) {
        keywords = ["milk", "dairy", "white"];
        confidence = 89;
      } else {
        keywords = pickRandomKeywords();
        confidence = 70 + Math.floor(Math.random() * 20);
      }
    }

    if (keywords.length === 0) {
      keywords = pickRandomKeywords();
      confidence = 70;
    }

    setDetectedKeywords(keywords);
    setDetectionConfidence(confidence);

    const identified = identifyProductFromKeywords(keywords);

    if (identified) {
      setIdentifiedProduct(identified);
      setProductName(identified.name);
      setCategory(identified.category);
      setQuantity(identified.quantity.toString());
      setLocation(identified.location);
      setOriginalPrice(identified.originalPrice.toString());
      setSku(identified.sku);
      setSupplier(identified.supplier);
      setReceivedDate(identified.receivedDate);
      setExpiryDate(identified.expiryDate);

      toast({
        title: "Product identified!",
        description: `Detected: ${identified.name} (${confidence}% confidence)`,
      });
    } else {
      setIdentifiedProduct(null);
      if (!productName) {
        toast({
          title: "Product not found",
          description: "Could not match detected features to inventory. Please fill details manually.",
          variant: "destructive",
        });
      }
    }

    return { keywords, confidence, identified };
  };

  const transformAiResponse = (data: any, detection: DetectionResult, produceTypeValue: string) => {
    const rawScore = Number(data?.freshness_score);
    const freshnessPercent = Number.isFinite(rawScore) ? Math.round(rawScore * 10) : 0;
    const grade = typeof data?.grade === "string" ? data.grade.toUpperCase() : undefined;
    const gradeConfig = GRADE_DISPLAY[grade ?? ""] || GRADE_DISPLAY["C"];
    const priceReduction = Math.max(0, Math.min(70, Number(data?.discount_recommendation) || 0));
    const shelfLife = Math.max(0, parseInt(data?.shelf_life_days_remaining) || 0);

    const basePriceValue = (() => {
      const parsed = parseFloat(originalPrice || detection.identified?.originalPrice?.toString() || "");
      return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
    })();

    const suggestedPrice =
      basePriceValue !== null
        ? parseFloat((basePriceValue * (1 - priceReduction / 100)).toFixed(2))
        : 0;

    const factors = [
      Number.isFinite(rawScore) ? `AI score: ${rawScore.toFixed(1)}/10` : "AI score unavailable",
      grade ? `Grade ${grade}` : undefined,
      data?.notes ? `Notes: ${data.notes}` : undefined,
    ].filter(Boolean) as string[];

    const eslActions = [
      `Update ESL label to "${data?.recommended_label || gradeConfig.label}"`,
      basePriceValue !== null
        ? `Apply ${priceReduction}% discount → $${suggestedPrice.toFixed(2)}`
        : `Apply ${priceReduction}% discount`,
      `Highlight ${gradeConfig.condition} freshness`,
    ];

    return {
      freshness: Math.max(0, Math.min(100, freshnessPercent)),
      shelfLife,
      suggestedPrice,
      priceReduction,
      condition: gradeConfig.condition,
      factors,
      eslActions,
      displayRecommendations: {
        color: gradeConfig.color,
        message: data?.recommended_label || gradeConfig.label,
        urgency: gradeConfig.urgency,
      },
      source: "ai" as const,
      grade,
      recommendedLabel: data?.recommended_label || gradeConfig.label,
      notes: data?.notes,
      produceType: data?.produce_type || produceTypeValue,
      originalPrice: basePriceValue,
    };
  };

  const runAiAnalysis = async (detection: DetectionResult) => {
    if (!imagePreview) {
      throw new Error("Image data unavailable");
    }

    const produceTypeValue = (detection.identified?.name || productName).trim();
    if (!produceTypeValue) {
      throw new Error("Please provide the product name before running AI analysis.");
    }

    const base64Image = imagePreview.includes(",") ? imagePreview.split(",")[1] : null;
    if (!base64Image) {
      throw new Error("Unable to read image data. Please re-upload the file.");
    }

    const payload = {
      image: base64Image,
      produce_type: produceTypeValue,
      days_since_harvest: getDaysInStorage(detection.identified),
      storage_condition: determineStorageCondition(),
      observations: buildObservationNote(detection.keywords),
    };

    const response = await fetch(ANALYZE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let message = "Failed to analyze image";
      try {
        const errorData = await response.json();
        message = errorData?.error || message;
      } catch {
        // ignore JSON parsing errors
      }
      throw new Error(message);
    }

    const data = await response.json();
    return transformAiResponse(data, detection, produceTypeValue);
  };

  const analyzeImage = async () => {
    if (!imagePreview) {
      toast({
        title: "No image",
        description: "Please upload or capture an image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    const detection = performDetection();

    try {
      const aiResult = await runAiAnalysis(detection);
      setAnalysisResult(aiResult);
      toast({
        title: "AI analysis complete",
        description: "SmartSave backend returned freshness insights",
      });
    } catch (error) {
      console.error("AI analysis failed:", error);
      toast({
        title: "Analysis failed",
        description:
          error instanceof Error ? error.message : "Unable to reach AI analyzer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const displayOriginalPrice =
    analysisResult?.originalPrice ?? (originalPrice ? parseFloat(originalPrice) : null);
  const hasOriginalPrice =
    typeof displayOriginalPrice === "number" && !Number.isNaN(displayOriginalPrice);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/admin/dynamic-pricing')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">AI Freshness Analysis</h1>
              <p className="text-muted-foreground">Vision-based perishable item analysis & dynamic pricing</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => window.open('/demo/freshness-analysis', '_blank')}
            className="gap-2"
          >
            <Maximize className="h-4 w-4" />
            Demo Mode
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Image Capture */}
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Image Input
              </h3>
              <p className="text-sm text-muted-foreground">Upload an image or use live camera feed</p>
            </div>

            {/* Image Preview Area */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border">
              {isCameraActive ? (
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
              ) : imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <Scan className="h-16 w-16 text-muted-foreground" />
                  <p className="text-muted-foreground">No image selected</p>
                </div>
              )}
            </div>

            <canvas ref={canvasRef} className="hidden" />

            {/* Test Mode Selector */}
            <div className="space-y-2">
              <Label htmlFor="testMode">Detection Mode</Label>
              <Select value={testMode} onValueChange={setTestMode}>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto-detect from filename</SelectItem>
                  <SelectItem value="bananas">Test with Bananas</SelectItem>
                  <SelectItem value="tomatoes">Test with Tomatoes</SelectItem>
                  <SelectItem value="milk">Test with Milk</SelectItem>
                  <SelectItem value="random">Random Product</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {testMode === "auto" 
                  ? "Will detect product based on image filename (sample-bananas.jpg, etc.)" 
                  : testMode === "random"
                  ? "Randomly selects a product for testing"
                  : `Will identify as ${testMode} regardless of image`}
              </p>
            </div>

            {/* Capture Controls */}
            <div className="flex gap-2">
              {isCameraActive ? (
                <>
                  <Button onClick={captureImage} className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Capture
                  </Button>
                  <Button onClick={stopCamera} variant="outline" className="flex-1">
                    Stop Camera
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={startCamera} variant="outline" className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Live Camera
                  </Button>
                  <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="flex-1">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </>
              )}
            </div>

            {/* Product Details Form */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Product Details</h4>
                {identifiedProduct && (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700">
                    Auto-detected
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input 
                    id="productName" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Auto-filled from image"
                    disabled={!!identifiedProduct}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input 
                    id="sku" 
                    value={sku} 
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="Product SKU"
                    disabled={!!identifiedProduct}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} disabled={!!identifiedProduct}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supplier">Supplier</Label>
                  <Input 
                    id="supplier" 
                    value={supplier} 
                    onChange={(e) => setSupplier(e.target.value)}
                    placeholder="Supplier name"
                    disabled={!!identifiedProduct}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Stock qty"
                    disabled={!!identifiedProduct}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Store Location</Label>
                  <Input 
                    id="location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Section/Aisle"
                    disabled={!!identifiedProduct}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="receivedDate">Received Date</Label>
                  <Input 
                    id="receivedDate" 
                    type="date"
                    value={receivedDate} 
                    onChange={(e) => setReceivedDate(e.target.value)}
                    disabled={!!identifiedProduct}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input 
                    id="expiryDate" 
                    type="date"
                    value={expiryDate} 
                    onChange={(e) => setExpiryDate(e.target.value)}
                    disabled={!!identifiedProduct}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalPrice">Original Price ($)</Label>
                <Input 
                  id="originalPrice" 
                  type="number" 
                  step="0.01"
                  value={originalPrice} 
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="0.00"
                  disabled={!!identifiedProduct}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observations">Observations</Label>
                <Textarea
                  id="observations"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  placeholder="e.g., Dull skin, minor blemishes, kept refrigerated"
                  rows={3}
                />
              </div>
            </div>

            {/* Detection Feedback */}
            {detectedKeywords.length > 0 && (
              <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Detected Features</span>
                  <Badge variant="secondary">{detectionConfidence}% confidence</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {detectedKeywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={analyzeImage} 
              disabled={isAnalyzing || !imagePreview}
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Analyzing image features...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-4 w-4" />
                  Analyze Freshness
                </>
              )}
            </Button>
          </Card>

          {/* Right Column - Analysis Results */}
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Analysis Results</h3>
              <p className="text-sm text-muted-foreground">AI-powered freshness assessment & pricing recommendation</p>
            </div>

        {analysisResult && (
          <div className="flex flex-wrap gap-2">
            <Badge variant={analysisResult.source === "ai" ? "default" : "secondary"}>
              {analysisResult.source === "ai" ? "AI powered" : "Demo mode"}
            </Badge>
            {analysisResult.grade && (
              <Badge variant="outline">Grade {analysisResult.grade}</Badge>
            )}
          </div>
        )}

            {analysisResult ? (
              <div className="space-y-6">
                {/* Identified Product Info */}
                {identifiedProduct && (
                  <Card className="p-4 bg-green-500/5 border-green-500/20">
                    <div className="flex items-start gap-3">
                      <Package className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="flex-1 space-y-1">
                        <h4 className="font-semibold text-sm">Product Identified</h4>
                        <p className="text-sm text-muted-foreground">
                          {identifiedProduct.name} • SKU: {identifiedProduct.sku}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {identifiedProduct.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            Exp: {identifiedProduct.expiryDate}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Freshness Score */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold">Freshness Score</Label>
                    <span className="text-3xl font-bold">{analysisResult.freshness}%</span>
                  </div>
                  <Progress value={analysisResult.freshness} className="h-4" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Condition: <strong>{analysisResult.condition}</strong></span>
                    <span className="text-muted-foreground">{analysisResult.shelfLife} days remaining</span>
                  </div>
                </div>

                {/* ESL Display Recommendations */}
                <Card className={`p-4 border-2 ${
                  analysisResult.displayRecommendations.urgency === 'high' ? 'border-red-500 bg-red-500/5' :
                  analysisResult.displayRecommendations.urgency === 'medium' ? 'border-yellow-500 bg-yellow-500/5' :
                  'border-green-500 bg-green-500/5'
                }`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-5 w-5" />
                      <Label className="text-base font-semibold">ESL Display Recommendation</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${
                        analysisResult.displayRecommendations.color === 'red' ? 'bg-red-500' :
                        analysisResult.displayRecommendations.color === 'yellow' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`} />
                      <span className="font-semibold text-lg">{analysisResult.displayRecommendations.message}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <Label className="text-sm font-medium mb-2 block">Action Items:</Label>
                      <ul className="space-y-1.5">
                        {analysisResult.eslActions.map((action, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-0.5">▶</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Pricing Recommendation */}
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      <Label className="text-base font-semibold">Pricing Recommendation</Label>
                    </div>
                    
                    <div className="flex items-baseline gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Original</p>
                      {hasOriginalPrice ? (
                        <span className="text-lg text-muted-foreground line-through">
                          ${Number(displayOriginalPrice).toFixed(2)}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">
                          Add original price to compare
                        </span>
                      )}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Suggested</p>
                        <span className="text-4xl font-bold text-primary">
                        ${analysisResult.suggestedPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="ml-auto text-right">
                        <Badge variant="destructive" className="text-sm px-3 py-1">
                          {Math.round(analysisResult.priceReduction)}% OFF
                        </Badge>
                      </div>
                    </div>

                    <div className="pt-3 border-t space-y-2">
                      <Label className="text-sm font-medium">Price Adjustment Factors:</Label>
                      <ul className="text-sm space-y-1.5">
                        {analysisResult.factors.map((factor, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    className="w-full"
                    onClick={() => {
                      if (analysisResult && identifiedProduct) {
                        setEslProductName(identifiedProduct.name);
                        setEslNewPrice(analysisResult.suggestedPrice.toFixed(2));
                        setEslDisplayMessage(analysisResult.displayRecommendations.message);
                        setEslDisplayColor(analysisResult.displayRecommendations.color);
                        setIsESLDialogOpen(true);
                      }
                    }}
                    disabled={!analysisResult || !identifiedProduct}
                  >
                    <Monitor className="mr-2 h-4 w-4" />
                    Apply to ESL
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => {
                      if (analysisResult && identifiedProduct) {
                        setRuleName(`Freshness Rule - ${identifiedProduct.name}`);
                        setRuleProduct(identifiedProduct.name);
                        setRuleCategory(identifiedProduct.category);
                        setRuleCondition("freshness_score");
                        setRuleThreshold(analysisResult.freshness.toString());
                        setRulePriceAdjustment(analysisResult.priceReduction.toString());
                      }
                      setIsPriceRuleDialogOpen(true);
                    }}
                  >
                    <Tag className="mr-2 h-4 w-4" />
                    Create Rule
                  </Button>
                </div>

                {/* Demo Note */}
                <Card className="p-3 bg-muted/50 border-muted">
                  <p className="text-xs text-muted-foreground">
                    <strong>Demo Mode:</strong> This analysis uses simulated AI vision with sample inventory data 
                    (Fruits, Vegetables, Dairy). The system identifies products from uploaded images and provides 
                    real-time freshness scoring, ESL display recommendations, and dynamic pricing suggestions.
                  </p>
                </Card>
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
          </Card>
        </div>
      </div>

      {/* ESL Confirmation Dialog */}
      <Dialog open={isESLDialogOpen} onOpenChange={setIsESLDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply Changes to ESL Display</DialogTitle>
            <DialogDescription>
              Review and confirm the changes to be applied to the Electronic Shelf Label. You can edit the fields before applying.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="esl-product">Product Name</Label>
              <Input
                id="esl-product"
                value={eslProductName}
                onChange={(e) => setEslProductName(e.target.value)}
                placeholder="Enter product name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="esl-price">New Price ($)</Label>
              <Input
                id="esl-price"
                type="number"
                step="0.01"
                value={eslNewPrice}
                onChange={(e) => setEslNewPrice(e.target.value)}
                placeholder="0.00"
              />
              {analysisResult && (
                <p className="text-xs text-muted-foreground">
                  Suggested: ${analysisResult.suggestedPrice.toFixed(2)} ({analysisResult.priceReduction}% reduction)
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="esl-message">Display Message</Label>
              <Textarea
                id="esl-message"
                value={eslDisplayMessage}
                onChange={(e) => setEslDisplayMessage(e.target.value)}
                placeholder="Enter promotional or urgency message"
                rows={3}
              />
              {analysisResult && (
                <p className="text-xs text-muted-foreground">
                  Suggested: "{analysisResult.displayRecommendations.message}"
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="esl-color">Display Color Scheme</Label>
              <Select value={eslDisplayColor} onValueChange={setEslDisplayColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red (High Urgency)</SelectItem>
                  <SelectItem value="yellow">Yellow (Medium Urgency)</SelectItem>
                  <SelectItem value="green">Green (Good Condition)</SelectItem>
                  <SelectItem value="blue">Blue (Special Offer)</SelectItem>
                </SelectContent>
              </Select>
              {analysisResult && (
                <p className="text-xs text-muted-foreground">
                  Suggested: {analysisResult.displayRecommendations.color.charAt(0).toUpperCase() + analysisResult.displayRecommendations.color.slice(1)} (based on {analysisResult.displayRecommendations.urgency} urgency)
                </p>
              )}
            </div>

            {analysisResult && (
              <div className="rounded-lg bg-muted p-3 space-y-1">
                <p className="text-sm font-medium">ESL Actions to be applied:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {analysisResult.eslActions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsESLDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              toast({
                title: "ESL Update Applied",
                description: `Successfully updated ESL for ${eslProductName} with new price $${eslNewPrice}`,
              });
              setIsESLDialogOpen(false);
            }}>
              <Check className="mr-2 h-4 w-4" />
              Confirm & Apply
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Price Rule Creation Dialog */}
      <Dialog open={isPriceRuleDialogOpen} onOpenChange={setIsPriceRuleDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create Dynamic Pricing Rule</DialogTitle>
            <DialogDescription>
              Set up an automated pricing rule based on freshness analysis. This rule will automatically adjust prices based on the conditions you define.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="rule-name">Rule Name</Label>
              <Input
                id="rule-name"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                placeholder="e.g., Freshness-based discount for bananas"
              />
              <p className="text-xs text-muted-foreground">
                Suggested: Give your rule a descriptive name for easy identification
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rule-product">Product</Label>
                <Input
                  id="rule-product"
                  value={ruleProduct}
                  onChange={(e) => setRuleProduct(e.target.value)}
                  placeholder="Product name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rule-category">Category</Label>
                <Select value={ruleCategory} onValueChange={setRuleCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="meat">Meat</SelectItem>
                    <SelectItem value="bakery">Bakery</SelectItem>
                    <SelectItem value="all">All Categories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rule-condition">Condition Trigger</Label>
              <Select value={ruleCondition} onValueChange={setRuleCondition}>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="freshness_score">Freshness Score Below Threshold</SelectItem>
                  <SelectItem value="shelf_life">Shelf Life Days Remaining</SelectItem>
                  <SelectItem value="expiry_date">Days Until Expiry</SelectItem>
                  <SelectItem value="visual_quality">Visual Quality Assessment</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                When should this pricing rule be triggered?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rule-threshold">Threshold Value</Label>
              <Input
                id="rule-threshold"
                type="number"
                value={ruleThreshold}
                onChange={(e) => setRuleThreshold(e.target.value)}
                placeholder="e.g., 70 for freshness score below 70%"
              />
              <p className="text-xs text-muted-foreground">
                {ruleCondition === "freshness_score" && "Trigger when freshness score falls below this percentage"}
                {ruleCondition === "shelf_life" && "Trigger when shelf life days remaining is below this number"}
                {ruleCondition === "expiry_date" && "Trigger when days until expiry is below this number"}
                {ruleCondition === "visual_quality" && "Trigger when visual quality score is below this value"}
              </p>
            </div>

            <div className="space-y-2">
              <Label>Price Adjustment</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Select value={ruleAdjustmentType} onValueChange={setRuleAdjustmentType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage Discount</SelectItem>
                      <SelectItem value="fixed">Fixed Amount Discount</SelectItem>
                      <SelectItem value="new_price">Set New Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    step="0.01"
                    value={rulePriceAdjustment}
                    onChange={(e) => setRulePriceAdjustment(e.target.value)}
                    placeholder={ruleAdjustmentType === "percentage" ? "e.g., 25" : "e.g., 1.50"}
                  />
                </div>
              </div>
              {analysisResult && (
                <p className="text-xs text-muted-foreground">
                  Suggested: {analysisResult.priceReduction}% discount based on current analysis
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rule-auto-apply"
                checked={ruleAutoApply}
                onChange={(e) => setRuleAutoApply(e.target.checked)}
                className="rounded border-input"
              />
              <Label htmlFor="rule-auto-apply" className="text-sm font-normal cursor-pointer">
                Auto-apply rule to ESL displays when triggered
              </Label>
            </div>

            <div className="rounded-lg bg-muted p-4 space-y-2">
              <p className="text-sm font-medium">Rule Summary</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• <strong>Product:</strong> {ruleProduct || "Not specified"} ({ruleCategory || "No category"})</p>
                <p>• <strong>Trigger:</strong> When {ruleCondition.replace(/_/g, " ")} is below {ruleThreshold || "threshold"}</p>
                <p>• <strong>Action:</strong> Apply {rulePriceAdjustment || "0"}{ruleAdjustmentType === "percentage" ? "%" : "$"} {ruleAdjustmentType === "percentage" ? "discount" : ruleAdjustmentType === "fixed" ? "discount" : "as new price"}</p>
                <p>• <strong>Auto-apply:</strong> {ruleAutoApply ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPriceRuleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              toast({
                title: "Pricing Rule Created",
                description: `Successfully created rule "${ruleName}" for ${ruleProduct}`,
              });
              setIsPriceRuleDialogOpen(false);
            }}>
              <Check className="mr-2 h-4 w-4" />
              Create Rule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
