import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Frown, Meh, Smile } from "lucide-react";

const Survey = () => {
  const [searchParams] = useSearchParams();
  const preSelectedScore = searchParams.get('score');
  const [selectedScore, setSelectedScore] = useState<number | null>(
    preSelectedScore ? parseInt(preSelectedScore) : null
  );
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedScore === null) return;
    
    if (selectedScore >= 9) {
      navigate('/thank-you');
    } else {
      // Scores 0-8 - ask for feedback
      navigate('/feedback');
    }
  };

  // Auto-submit if score was pre-selected from email
  useEffect(() => {
    if (preSelectedScore !== null && selectedScore !== null) {
      const timer = setTimeout(() => {
        handleSubmit();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [preSelectedScore]);

  const getEmoji = (score: number) => {
    if (score <= 6) return <Frown className="w-5 h-5 text-destructive" />;
    if (score <= 8) return <Meh className="w-5 h-5 text-muted-foreground" />;
    return <Smile className="w-5 h-5 text-accent" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <Card className="p-6 md:p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8 space-y-2">
            <div className="w-16 h-16 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-md mb-4">
              <div className="text-2xl font-bold text-primary-foreground">HC</div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              We Value Your Feedback
            </h1>
            <p className="text-muted-foreground">
              How likely are you to recommend us to a friend or family member?
            </p>
          </div>

          {/* NPS Scale */}
          <div className="mb-8">
            <div className="grid grid-cols-11 gap-2 mb-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                <button
                  key={score}
                  onClick={() => setSelectedScore(score)}
                  className={`
                    aspect-square rounded-xl font-semibold text-lg
                    transition-all duration-200
                    ${selectedScore === score 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-110' 
                      : 'bg-secondary hover:bg-secondary/80 text-foreground hover:scale-105'
                    }
                  `}
                >
                  {score}
                </button>
              ))}
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>Not likely</span>
              <span>Very likely</span>
            </div>

            {/* Emoji Feedback */}
            {selectedScore !== null && (
              <div className="mt-6 text-center animate-fade-in">
                <div className="flex justify-center mb-2">
                  {getEmoji(selectedScore)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedScore <= 8 && "We'd like to hear what went wrong"}
                  {selectedScore >= 9 && "Great! Would you share your experience?"}
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={selectedScore === null}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            size="lg"
          >
            Submit Feedback
          </Button>
        </Card>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
