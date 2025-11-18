import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, PlayCircle, Clock, Monitor, ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContentScheduler() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminWorkspace = location.pathname.includes('/admin/');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(isAdminWorkspace ? '/admin/media-management' : '/management/media-management')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Content Scheduler</h1>
              <p className="mt-2 text-muted-foreground">
                Schedule and manage media campaigns across all displays
              </p>
            </div>
          </div>
          <Button className="bg-gradient-primary shadow-elevated">
            <Plus className="mr-2 h-4 w-4" />
            Create Campaign
          </Button>
        </div>

        {/* Schedule Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Now</p>
                  <p className="text-3xl font-bold text-foreground">12</p>
                  <p className="text-sm text-accent mt-1">Running campaigns</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <PlayCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-3xl font-bold text-foreground">8</p>
                  <p className="text-sm text-primary mt-1">Upcoming</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Displays</p>
                  <p className="text-3xl font-bold text-foreground">172</p>
                  <p className="text-sm text-accent mt-1">LCD + ESL</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Campaigns */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  name: "Summer Sale Campaign", 
                  displays: "12 LCD + 24 ESL", 
                  schedule: "Today 9:00 AM - 9:00 PM", 
                  status: "active",
                  impressions: "2,450",
                  engagement: "18.3%",
                  remaining: "5h 30m"
                },
                { 
                  name: "Fresh Produce Highlight", 
                  displays: "8 LCD (Produce Zone)", 
                  schedule: "All Day", 
                  status: "active",
                  impressions: "1,820",
                  engagement: "22.1%",
                  remaining: "Continuous"
                },
                { 
                  name: "Loyalty Program Promo", 
                  displays: "All checkout displays", 
                  schedule: "10:00 AM - 8:00 PM", 
                  status: "active",
                  impressions: "3,100",
                  engagement: "31.5%",
                  remaining: "3h 15m"
                },
              ].map((campaign, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <PlayCircle className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <p className="font-medium text-foreground">{campaign.name}</p>
                            <p className="text-sm text-muted-foreground">{campaign.displays}</p>
                          </div>
                          <div className="flex items-center gap-4 flex-wrap">
                            <Badge variant="default" className="bg-accent">
                              {campaign.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {campaign.schedule}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Remaining: {campaign.remaining}
                            </span>
                          </div>
                          <div className="flex items-center gap-6 text-xs">
                            <div>
                              <span className="text-muted-foreground">Impressions: </span>
                              <span className="font-medium text-foreground">{campaign.impressions}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Engagement: </span>
                              <span className="font-medium text-accent">{campaign.engagement}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Scheduled Campaigns */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Scheduled Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  name: "New Product Launch", 
                  displays: "8 LCD (Entrance)", 
                  schedule: "Tomorrow 6:00 AM", 
                  duration: "24 hours",
                  status: "scheduled" 
                },
                { 
                  name: "Weekend Special", 
                  displays: "All displays", 
                  schedule: "Saturday 8:00 AM - Sunday 8:00 PM", 
                  duration: "2 days",
                  status: "scheduled" 
                },
                { 
                  name: "Clearance Event", 
                  displays: "24 ESL edge displays", 
                  schedule: "Starts in 2 hours", 
                  duration: "48 hours",
                  status: "pending" 
                },
              ].map((campaign, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <p className="font-medium text-foreground">{campaign.name}</p>
                            <p className="text-sm text-muted-foreground">{campaign.displays}</p>
                          </div>
                          <div className="flex items-center gap-4 flex-wrap">
                            <Badge variant="secondary">
                              {campaign.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {campaign.schedule}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Duration: {campaign.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Create New Campaign */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Campaign Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="Enter campaign name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="media-select">Select Media</Label>
                  <Input id="media-select" placeholder="Choose from media library" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="display-target">Target Displays</Label>
                  <Input id="display-target" placeholder="Select displays or zones" className="mt-2" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="start-time">Start Date & Time</Label>
                  <Input id="start-time" type="datetime-local" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="end-time">End Date & Time</Label>
                  <Input id="end-time" type="datetime-local" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Campaign description or notes" className="mt-2" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="flex-1 bg-gradient-primary shadow-elevated">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Campaign
              </Button>
              <Button variant="outline" className="flex-1">
                <PlayCircle className="mr-2 h-4 w-4" />
                Start Immediately
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
