import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SMS = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* SMS Message Bubble */}
        <div className="bg-card rounded-3xl shadow-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-semibold text-sm">HC</span>
            </div>
            <div className="flex-1 space-y-3">
              <div className="bg-secondary rounded-2xl rounded-tl-sm p-4">
                <p className="text-sm leading-relaxed text-foreground">
                  Thanks for visiting us today. We'd love your feedback.
                </p>
                <p className="text-sm leading-relaxed text-foreground mt-2">
                  Please tap the link below to rate your experience:
                </p>
              </div>
              
              <Button 
                onClick={() => navigate('/survey')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              >
                Take Survey
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Reply STOP to unsubscribe
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Back to entry options
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SMS;
