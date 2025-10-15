import { TrendingUp } from "lucide-react";

interface GeoScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export default function GeoScoreBadge({ score, size = "md" }: GeoScoreBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-accent";
    if (score >= 40) return "text-yellow-500";
    return "text-destructive";
  };

  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-card">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className={`${size === "lg" ? "w-6 h-6" : "w-5 h-5"} ${getScoreColor(score)}`} />
        <span className="text-sm font-medium text-muted-foreground">GEO Score</span>
      </div>
      <div className={`font-bold ${sizeClasses[size]} ${getScoreColor(score)}`}>
        {score}
      </div>
      <div className="text-sm text-muted-foreground mt-1">out of 100</div>
    </div>
  );
}
