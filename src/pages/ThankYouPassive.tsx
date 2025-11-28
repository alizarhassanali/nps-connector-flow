import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const ThankYouPassive = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6 bg-card/95 backdrop-blur">
          
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>

          {/* Thank You Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Thank You!
            </h1>
            <p className="text-muted-foreground">
              We appreciate you taking the time to share your feedback.
            </p>
            <p className="text-sm text-muted-foreground">
              Your response helps us continue to improve our service.
            </p>
          </div>

          {/* Return Home */}
          <div className="pt-4">
            <Button
              onClick={() => navigate('/')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Return to Home
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ThankYouPassive;
