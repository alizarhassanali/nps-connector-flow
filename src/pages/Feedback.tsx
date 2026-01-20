import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const Feedback = () => {
  const [searchParams] = useSearchParams();
  const score = searchParams.get('score') ? parseInt(searchParams.get('score')!) : null;
  const [feedback, setFeedback] = useState("");
  const [allowContact, setAllowContact] = useState(false);
  const navigate = useNavigate();

  const getFeedbackMessage = () => {
    if (score !== null && score <= 6) {
      return "Thank you for your honesty. We are sorry to hear that your experience did not meet expectations. Please tell us what happened so we can follow up and make things better.";
    } else if (score !== null && score <= 8) {
      return "Thank you for your feedback. We'd love to know what would have made your experience even better.";
    } else {
      return "Thank you for your feedback! We're happy you had a positive experience. Is there anything that stood out that you'd like to share?";
    }
  };

  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-6 md:p-8 shadow-lg space-y-6 bg-card/95 backdrop-blur">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-muted rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              We Value Your Feedback
            </h1>
            <p className="text-muted-foreground">
              {getFeedbackMessage()}
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

            {/* Contact Consent */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg border border-border">
              <Checkbox 
                id="contact-consent" 
                checked={allowContact}
                onCheckedChange={(checked) => setAllowContact(checked as boolean)}
                className="mt-1"
              />
              <div className="flex-1">
                <Label 
                  htmlFor="contact-consent" 
                  className="text-sm font-medium cursor-pointer leading-tight"
                >
                  I consent to being contacted by the clinic via email or phone regarding my feedback
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  This helps us better understand and address your concerns
                </p>
              </div>
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
