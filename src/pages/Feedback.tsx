import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-6 md:p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              We're Sorry
            </h1>
            <p className="text-muted-foreground">
              Your experience wasn't what we hoped for. Please help us understand what happened so we can improve.
            </p>
          </div>

          {/* Feedback Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="feedback" className="text-sm font-medium text-foreground">
                What could we have done better?
              </label>
              <Textarea
                id="feedback"
                placeholder="Please share your thoughts..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[150px] resize-none"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              size="lg"
            >
              Submit Feedback
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              Skip for now
            </Button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-center text-muted-foreground">
            Your feedback is private and will be reviewed by our team to improve our service.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
