import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-accent fill-accent" />
          </div>

          {/* Thank You Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Thank You!
            </h1>
            <p className="text-muted-foreground">
              We're thrilled you had a great experience with us.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <p className="text-sm text-foreground font-medium">
              Would you like to share your experience publicly?
            </p>
            <Button
              onClick={() => navigate('/google-review')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              size="lg"
            >
              Leave a Google Review
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              No thanks
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
