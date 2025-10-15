import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, TrendingUp, Zap, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center space-y-8">
            {/* Logo Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm shadow-card hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-glow">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-sm">GEO Insights</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Understand how{" "}
                <span className="text-primary">AI models</span>
                <br />
                see your brand
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                The future of visibility is generative. Track your brand&apos;s presence across ChatGPT, Claude, Gemini, and more.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/overview">
                <Button
                  size="lg"
                  className="gap-2 shadow-glow text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                >
                  View Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Model Testing</h3>
            <p className="text-muted-foreground">
              Test prompts across ChatGPT, Claude, Gemini and Perplexity to see when your brand appears.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Citation Tracking</h3>
            <p className="text-muted-foreground">
              Monitor citation patterns, frequency trends, and which models mention your brand most.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-card hover:shadow-glow hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
            <p className="text-muted-foreground">
              Compare your GEO visibility score against competitors and identify opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Track what matters</h2>
          <p className="text-xl text-muted-foreground">
            Real-time insights into your AI visibility
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <p className="text-muted-foreground">AI Models Tracked</p>
          </div>
          <div className="text-center p-6 hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">100K+</div>
            <p className="text-muted-foreground">Prompts Analyzed</p>
          </div>
          <div className="text-center p-6 hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">85%</div>
            <p className="text-muted-foreground">Citation Accuracy</p>
          </div>
          <div className="text-center p-6 hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Real-time Monitoring</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to optimize your AI presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start tracking your brand&apos;s visibility across AI platforms today.
          </p>
          <Link to="/overview">
            <Button
              size="lg"
              className="gap-2 shadow-glow hover:scale-105 transition-transform duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
