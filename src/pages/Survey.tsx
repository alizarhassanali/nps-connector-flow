import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Frown, Meh, Smile } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const Survey = () => {
  const [searchParams] = useSearchParams();
  const preSelectedScore = searchParams.get('score');
  const [selectedScore, setSelectedScore] = useState<number | null>(
    preSelectedScore ? parseInt(preSelectedScore) : null
  );
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (selectedScore === null) return;
    
    if (selectedScore >= 9) {
      navigate('/thank-you');
    } else {
      // Scores 0-8 - ask for feedback with score
      navigate(`/feedback?score=${selectedScore}`);
    }
  };


  const getEmoji = (score: number) => {
    if (score <= 6) return <Frown className="w-5 h-5 text-destructive" />;
    if (score <= 8) return <Meh className="w-5 h-5 text-muted-foreground" />;
    return <Smile className="w-5 h-5 text-accent" />;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-2xl animate-fade-in">
        <Card className="p-6 md:p-8 shadow-lg bg-card/95 backdrop-blur">
          
          {/* Header */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('common.valueYourFeedback')}
            </h1>
            <p className="text-muted-foreground">
              {t('survey.question')}
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
                      : 'bg-card hover:bg-muted text-foreground hover:scale-105 border-2 border-border'
                    }
                  `}
                >
                  {score}
                </button>
              ))}
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>{t('common.notLikely')}</span>
              <span>{t('common.veryLikely')}</span>
            </div>

            {/* Emoji Feedback */}
            {selectedScore !== null && (
              <div className="mt-6 text-center animate-fade-in">
                <div className="flex justify-center mb-2">
                  {getEmoji(selectedScore)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedScore <= 8 && t('survey.lowScoreMessage')}
                  {selectedScore >= 9 && t('survey.highScoreMessage')}
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
            {t('common.submitFeedback')}
          </Button>
        </Card>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t('common.backToHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
