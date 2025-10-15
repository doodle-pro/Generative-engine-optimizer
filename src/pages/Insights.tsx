import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPromptCategories, mockCitationData, mockModelDistribution } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Brain, Target, Zap } from "lucide-react";

export default function Insights() {
  const radarData = [
    { category: "Product Recs", value: 85 },
    { category: "How-to", value: 72 },
    { category: "Comparisons", value: 68 },
    { category: "Reviews", value: 78 },
    { category: "General", value: 55 },
  ];

  const avgScore = 78;
  const totalMentions = 245;
  const topCategory = "Product Recommendations";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Advanced Insights</h1>
        <p className="text-muted-foreground text-lg">
          Deep dive into your AI visibility patterns and optimization opportunities
        </p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card border-border">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-primary" />
              AI Understanding
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgScore}%</div>
            <p className="text-sm text-muted-foreground mt-1">
              Models accurately represent your brand
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              Top Category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{topCategory}</div>
            <p className="text-sm text-muted-foreground mt-1">
              Most common prompt type
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border">
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Optimization Score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">B+</div>
            <p className="text-sm text-muted-foreground mt-1">
              Room for improvement in comparisons
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Prompt Impact Heatmap */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Prompt Category Performance</CardTitle>
          <CardDescription>How different prompt types drive brand mentions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPromptCategories.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{cat.category}</span>
                  <span className="text-muted-foreground">{cat.mentions} mentions</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-primary transition-all"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{cat.percentage}% of total</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle>Visibility Radar</CardTitle>
            <CardDescription>Performance across different prompt categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid className="stroke-muted" />
                <PolarAngleAxis dataKey="category" className="text-xs" />
                <PolarRadiusAxis className="text-xs" />
                <Radar name="Performance" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle>Model-Specific Performance</CardTitle>
            <CardDescription>Your visibility score by AI platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockModelDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="model" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="mentions" radius={[8, 8, 0, 0]}>
                  {mockModelDistribution.map((entry, index) => (
                    <Bar key={`bar-${index}`} dataKey="mentions" fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Optimization Recommendations</CardTitle>
          <CardDescription>AI-powered suggestions to improve your GEO score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Increase Content Authority",
                description: "Create more in-depth guides and tutorials to boost mentions in 'How-to' prompts",
                impact: "High",
                color: "text-green-500"
              },
              {
                title: "Optimize for Comparisons",
                description: "Strengthen competitive differentiation to appear more frequently in comparison queries",
                impact: "Medium",
                color: "text-accent"
              },
              {
                title: "Enhance Product Pages",
                description: "Add more structured data and clear feature descriptions for better AI understanding",
                impact: "Medium",
                color: "text-accent"
              },
              {
                title: "Build Thought Leadership",
                description: "Publish more research and insights to establish expertise in your domain",
                impact: "High",
                color: "text-green-500"
              },
            ].map((rec, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all bg-card/50"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{rec.title}</h3>
                  <span className={`text-xs font-medium ${rec.color}`}>
                    {rec.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
