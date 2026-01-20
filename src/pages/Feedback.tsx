import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const Feedback = () => {
  const [searchParams] = useSearchParams();
  const score = searchParams.get('score') ? parseInt(searchParams.get('score')!) : null;
  const [feedback, setFeedback] = useState("");
  const [allowContact, setAllowContact] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getFeedbackMessage = () => {
    if (score !== null && score <= 6) {
      return t('feedback.detractorMessage');
    } else if (score !== null && score <= 8) {
      return t('feedback.passiveMessage');
    } else {
      return t('feedback.promoterMessage');
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
              {t('common.valueYourFeedback')}
            </h1>
            <p className="text-muted-foreground">
              {getFeedbackMessage()}
            </p>
          </div>

          {/* Feedback Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="feedback" className="text-sm font-medium text-foreground">
                {t('feedback.inputLabel')}
              </label>
              <Textarea
                id="feedback"
                placeholder={t('feedback.placeholder')}
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
                  {t('feedback.consent')}
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('feedback.consentHelp')}
                </p>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!feedback.trim()}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              size="lg"
            >
              {t('common.submitFeedback')}
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="w-full"
            >
              {t('feedback.skip')}
            </Button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-center text-muted-foreground">
            {t('feedback.privacyNote')}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
