import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Email Container */}
        <Card className="shadow-lg overflow-hidden">
          {/* Email Header */}
          <div className="bg-primary p-4 text-center">
            <div className="w-16 h-16 mx-auto bg-primary-foreground rounded-2xl flex items-center justify-center shadow-md mb-3">
              <div className="text-2xl font-bold text-primary">HC</div>
            </div>
            <h2 className="text-xl font-semibold text-primary-foreground">
              HealthCare Clinic
            </h2>
          </div>

          {/* Email Body */}
          <div className="p-6 space-y-6 bg-card">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Subject: We value your feedback</p>
              <hr className="border-border" />
            </div>

            <div className="space-y-4">
              <p className="text-foreground">Hello,</p>
              
              <p className="text-foreground leading-relaxed">
                Thanks for your recent visit. We hope you had a positive experience with us.
              </p>

              <p className="text-foreground leading-relaxed font-medium">
                How likely are you to recommend us to a friend or family member?
              </p>

              {/* NPS Scale */}
              <div className="space-y-3">
                <div className="grid grid-cols-11 gap-1.5">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                    <button
                      key={score}
                      onClick={() => navigate(`/survey?score=${score}`)}
                      className="aspect-square rounded-lg font-semibold text-sm bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
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
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Click a number to rate your experience
              </p>
            </div>
          </div>

          {/* Email Footer */}
          <div className="bg-muted p-4 text-center border-t">
            <p className="text-xs text-muted-foreground">
              HealthCare Clinic | 123 Medical Way
            </p>
            <button className="text-xs text-muted-foreground underline hover:text-foreground mt-2">
              Unsubscribe
            </button>
          </div>
        </Card>

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

export default Email;
