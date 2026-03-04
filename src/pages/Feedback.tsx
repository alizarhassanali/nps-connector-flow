import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MessageSquare } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";
import SurveyQuestionRenderer from "@/components/survey/SurveyQuestionRenderer";
import type { SurveyQuestion, QuestionAnswer } from "@/components/survey/types";

// Configure your follow-up questions here
const followUpQuestions: SurveyQuestion[] = [
  {
    id: 'experience-areas',
    type: 'checkbox',
    label: 'Which areas of your experience could be improved?',
    options: ['Wait time', 'Staff friendliness', 'Communication', 'Cleanliness', 'Billing'],
  },
  {
    id: 'visit-purpose',
    type: 'radio',
    label: 'What was the primary purpose of your visit?',
    options: ['Consultation', 'Follow-up', 'Treatment', 'Other'],
  },
  {
    id: 'overall-care',
    type: 'scale',
    label: 'How would you rate the quality of care?',
    min: 1,
    max: 5,
    minLabel: 'Poor',
    maxLabel: 'Excellent',
  },
  {
    id: 'additional-comments',
    type: 'open-text',
    label: 'Any additional comments?',
    placeholder: 'Tell us more about your experience...',
  },
];

const Feedback = () => {
  const [searchParams] = useSearchParams();
  const score = searchParams.get('score') ? parseInt(searchParams.get('score')!) : null;
  const [answers, setAnswers] = useState<Record<string, QuestionAnswer>>({});
  const [allowContact, setAllowContact] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getFeedbackMessage = () => {
    if (score !== null && score <= 6) return t('feedback.detractorMessage');
    if (score !== null && score <= 8) return t('feedback.passiveMessage');
    return t('feedback.promoterMessage');
  };

  const updateAnswer = (questionId: string, value: QuestionAnswer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    // In a real app, submit answers to backend
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

          {/* Dynamic Questions */}
          <div className="space-y-6">
            {followUpQuestions.map((question) => (
              <SurveyQuestionRenderer
                key={question.id}
                question={question}
                value={answers[question.id] ?? null}
                onChange={(value) => updateAnswer(question.id, value)}
              />
            ))}
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
