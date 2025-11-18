import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save, RotateCcw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AlgorithmSettings() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');
  const [settings, setSettings] = useState({
    morningStart: "06:00",
    morningEnd: "12:00",
    afternoonEnd: "18:00",
    minDiscount: 15,
    maxDiscount: 70,
    stepSize: 5,
    targetQtyMin: 0,
    targetQtyMax: 5,
    minMargin: 20,
    updateFrequency: "hourly"
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Algorithm configuration has been updated successfully.",
    });
  };

  const handleReset = () => {
    setSettings({
      morningStart: "06:00",
      morningEnd: "12:00",
      afternoonEnd: "18:00",
      minDiscount: 15,
      maxDiscount: 70,
      stepSize: 5,
      targetQtyMin: 0,
      targetQtyMax: 5,
      minMargin: 20,
      updateFrequency: "hourly"
    });
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to defaults.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(isAdminWorkspace ? '/admin/dynamic-pricing' : '/management/dynamic-pricing')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Algorithm Settings</h1>
              <p className="mt-2 text-muted-foreground">
                Configure dynamic pricing algorithm parameters
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button onClick={handleSave} className="bg-gradient-primary">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Time Windows Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="morning-start">Morning Start Time</Label>
                <Input
                  id="morning-start"
                  type="time"
                  value={settings.morningStart}
                  onChange={(e) => setSettings({ ...settings, morningStart: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="morning-end">Morning End / Afternoon Start</Label>
                <Input
                  id="morning-end"
                  type="time"
                  value={settings.morningEnd}
                  onChange={(e) => setSettings({ ...settings, morningEnd: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="afternoon-end">Afternoon End / Evening Start</Label>
                <Input
                  id="afternoon-end"
                  type="time"
                  value={settings.afternoonEnd}
                  onChange={(e) => setSettings({ ...settings, afternoonEnd: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Price Adjustment Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="min-discount">Minimum Discount %</Label>
                <Input
                  id="min-discount"
                  type="number"
                  value={settings.minDiscount}
                  onChange={(e) => setSettings({ ...settings, minDiscount: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="max-discount">Maximum Discount %</Label>
                <Input
                  id="max-discount"
                  type="number"
                  value={settings.maxDiscount}
                  onChange={(e) => setSettings({ ...settings, maxDiscount: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="step-size">Price Step Size %</Label>
                <Input
                  id="step-size"
                  type="number"
                  value={settings.stepSize}
                  onChange={(e) => setSettings({ ...settings, stepSize: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Inventory Target Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="target-min">Target End Qty (Min)</Label>
                <Input
                  id="target-min"
                  type="number"
                  value={settings.targetQtyMin}
                  onChange={(e) => setSettings({ ...settings, targetQtyMin: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="target-max">Target End Qty (Max)</Label>
                <Input
                  id="target-max"
                  type="number"
                  value={settings.targetQtyMax}
                  onChange={(e) => setSettings({ ...settings, targetQtyMax: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="min-margin">Minimum Margin %</Label>
                <Input
                  id="min-margin"
                  type="number"
                  value={settings.minMargin}
                  onChange={(e) => setSettings({ ...settings, minMargin: Number(e.target.value) })}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
