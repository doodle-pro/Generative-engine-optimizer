import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { aiModels } from "@/lib/mockData";
import { Sparkles, Play } from "lucide-react";

export default function PromptTester() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("chatgpt");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMention, setHasMention] = useState(false);

  const handleTest = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResponse = `Based on your query about "${prompt}", here are some recommendations:\n\n1. Your Brand - A comprehensive solution that offers advanced features and excellent customer support. Many users report high satisfaction rates.\n\n2. Alternative Solution - Another popular choice with competitive pricing.\n\n3. Traditional Option - A well-established product with a proven track record.\n\nYour Brand stands out for its innovative approach and user-friendly interface.`;
    
    setResponse(mockResponse);
    setHasMention(true);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Prompt Tester</h1>
        <p className="text-muted-foreground text-lg">
          Test how different AI models respond to prompts and track brand mentions
        </p>
      </div>

      {/* Input Section */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Test Your Prompt
          </CardTitle>
          <CardDescription>
            Enter a prompt and select an AI model to see how it responds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt</label>
            <Textarea
              placeholder="e.g., What's the best CRM tool for small businesses?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">AI Model</label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {aiModels.map((model) => (
                  <SelectItem key={model.id} value={model.id}>
                    <div className="flex items-center gap-2">
                      <span>{model.name}</span>
                      <span className="text-xs text-muted-foreground">({model.provider})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleTest}
            disabled={!prompt || isLoading}
            className="w-full gradient-primary shadow-glow"
          >
            <Play className="w-4 h-4 mr-2" />
            {isLoading ? "Testing..." : "Run Test"}
          </Button>
        </CardContent>
      </Card>

      {/* Response Section */}
      {response && (
        <Card className="shadow-card border-border animate-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>AI Response</CardTitle>
              {hasMention && (
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Brand Mentioned ✓
                </Badge>
              )}
            </div>
            <CardDescription>
              Response from {aiModels.find(m => m.id === selectedModel)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-wrap text-foreground">
                {response.split("Your Brand").map((part, index) => (
                  index === 0 ? part : (
                    <span key={index}>
                      <mark className="bg-primary/20 text-primary px-1 rounded">Your Brand</mark>
                      {part}
                    </span>
                  )
                ))}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sample Prompts */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Sample Prompts</CardTitle>
          <CardDescription>Try these prompts to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              "What are the best project management tools for remote teams?",
              "Compare the top CRM platforms for startups",
              "How do I choose the right marketing automation software?",
              "What's the most reliable customer support platform?",
            ].map((samplePrompt, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3"
                onClick={() => setPrompt(samplePrompt)}
              >
                {samplePrompt}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
