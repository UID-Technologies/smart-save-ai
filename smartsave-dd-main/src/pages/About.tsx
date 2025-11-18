import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target,
  Eye,
  Lightbulb,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/navigation/Header";
import smartSaveLogo from "@/assets/smartsave-logo.png";
import displayDataLogo from "@/assets/displaydata-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 flex items-center gap-4 justify-center">
              <img src={smartSaveLogo} alt="SmartSave" className="h-24 w-auto object-contain" />
              <img src={displayDataLogo} alt="DisplayData" className="h-16 w-auto object-contain" />
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              About SmartSave
            </h1>
            <p className="mb-10 max-w-3xl mx-auto text-xl text-muted-foreground">
              Revolutionizing retail food management through intelligent technology and sustainable practices
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-foreground text-center lg:text-4xl">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              SmartSave by DisplayData was born from a simple observation: billions of pounds of perfectly good food 
              go to waste every year while retailers struggle with narrow profit margins and consumers seek fresher, 
              more sustainable options.
            </p>
            <p>
              We realized that the solution wasn't just about better technology—it was about creating an intelligent 
              ecosystem that benefits everyone in the food supply chain. From advanced inventory forecasting and 
              dynamic pricing to real-time expiration tracking and automated donation programs, SmartSave brings 
              together cutting-edge solutions that work in harmony.
            </p>
            <p>
              Today, SmartSave powers retail operations across multiple markets, helping businesses maximize 
              profitability while minimizing environmental impact. Our platform has prevented millions of pounds 
              of food waste, saved retailers substantial costs, and helped communities access fresh food more affordably.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To eliminate food waste in retail through intelligent technology, creating a sustainable 
                  ecosystem that benefits retailers, consumers, and communities alike.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground">
                  A world where every piece of food reaches its highest purpose—whether on someone's table or 
                  feeding those in need—with zero unnecessary waste.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elevated transition-all hover:shadow-elevated-hover">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Our Values
                </h3>
                <p className="text-muted-foreground">
                  Innovation, sustainability, collaboration, and impact. We believe technology should serve 
                  people and the planet, creating measurable positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Why Choose SmartSave
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just software—a complete transformation partner
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-card transition-all hover:shadow-elevated text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Proven Results
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track record of 60%+ waste reduction and 25% profit margin improvements
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-all hover:shadow-elevated text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Scalable Platform
                </h3>
                <p className="text-sm text-muted-foreground">
                  From single stores to enterprise chains, grows with your business
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-all hover:shadow-elevated text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Expert Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated team ensures smooth implementation and ongoing success
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card transition-all hover:shadow-elevated text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  Global Reach
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proven across multiple markets with local customization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-6 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Making a measurable difference every day
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="mb-2 text-5xl font-bold text-primary">5M+ lbs</p>
              <p className="text-lg text-muted-foreground">Food Waste Prevented</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-5xl font-bold text-accent">200+</p>
              <p className="text-lg text-muted-foreground">Partner Retailers</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-5xl font-bold text-primary">$50M+</p>
              <p className="text-lg text-muted-foreground">Value Recovered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Partner with SmartSave and transform your retail operations while making a positive impact on the planet
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary shadow-elevated">
              <Link to="/management">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
