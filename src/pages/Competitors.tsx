import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { mockCompetitorData } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award } from "lucide-react";

export default function Competitors() {
  const comparisonData = mockCompetitorData.map(c => ({
    name: c.name,
    score: c.score,
    mentions: c.mentions,
  }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Competitor Analysis</h1>
        <p className="text-muted-foreground text-lg">
          Compare your AI visibility against competitors
        </p>
      </div>

      {/* Leaderboard */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            GEO Visibility Leaderboard
          </CardTitle>
          <CardDescription>Rankings based on overall AI platform mentions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCompetitorData.map((competitor, index) => (
              <div
                key={competitor.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0 ? "gradient-primary text-primary-foreground shadow-glow" : "bg-muted text-muted-foreground"
                }`}>
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{competitor.name}</h3>
                    {index === 0 && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        You
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{competitor.mentions} mentions</span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {competitor.growth}% growth
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{competitor.score}</div>
                  <div className="text-xs text-muted-foreground">GEO Score</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle>GEO Score Comparison</CardTitle>
            <CardDescription>Overall visibility scores across competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="score" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle>Total Mentions</CardTitle>
            <CardDescription>Number of brand mentions across all AI platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" className="text-xs" />
                <YAxis dataKey="name" type="category" className="text-xs" />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="mentions" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Growth Trends */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Growth Trends</CardTitle>
          <CardDescription>Month-over-month growth comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockCompetitorData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }} />
              <Legend />
              <Line type="monotone" dataKey="growth" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Growth %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
