export const mockCitationData = [
  { date: "2024-01", chatgpt: 45, claude: 38, gemini: 42, perplexity: 35 },
  { date: "2024-02", chatgpt: 52, claude: 45, gemini: 48, perplexity: 41 },
  { date: "2024-03", chatgpt: 58, claude: 51, gemini: 55, perplexity: 47 },
  { date: "2024-04", chatgpt: 65, claude: 58, gemini: 62, perplexity: 54 },
  { date: "2024-05", chatgpt: 72, claude: 65, gemini: 68, perplexity: 61 },
  { date: "2024-06", chatgpt: 78, claude: 72, gemini: 75, perplexity: 68 },
];

export const mockCompetitorData = [
  { name: "Your Brand", score: 78, mentions: 245, growth: 12.5 },
  { name: "Competitor A", score: 72, mentions: 198, growth: 8.3 },
  { name: "Competitor B", score: 65, mentions: 176, growth: 5.7 },
  { name: "Competitor C", score: 58, mentions: 142, growth: 3.2 },
];

export const mockPromptCategories = [
  { category: "Product Recommendations", mentions: 89, percentage: 36 },
  { category: "How-to Guides", mentions: 67, percentage: 27 },
  { category: "Comparisons", mentions: 45, percentage: 18 },
  { category: "Reviews", mentions: 32, percentage: 13 },
  { category: "General Questions", mentions: 15, percentage: 6 },
];

export const mockModelDistribution = [
  { model: "ChatGPT", mentions: 78, color: "hsl(var(--chart-1))" },
  { model: "Claude", mentions: 72, color: "hsl(var(--chart-2))" },
  { model: "Gemini", mentions: 75, color: "hsl(var(--chart-3))" },
  { model: "Perplexity", mentions: 68, color: "hsl(var(--chart-4))" },
];

export const aiModels = [
  { id: "chatgpt", name: "ChatGPT", provider: "OpenAI" },
  { id: "claude", name: "Claude", provider: "Anthropic" },
  { id: "gemini", name: "Gemini", provider: "Google" },
  { id: "perplexity", name: "Perplexity", provider: "Perplexity AI" },
];
