import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClinicLogo from "@/components/ClinicLogo";

const Email = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-lg animate-fade-in">
        {/* Email Container */}
        <Card className="shadow-xl overflow-hidden bg-card/95 backdrop-blur">
          {/* Email Header */}
          <div className="bg-primary p-6 text-center">
            <h2 className="text-xl font-bold text-primary-foreground">{t('common.valueYourFeedback')}</h2>
          </div>

          {/* Email Body */}
          <div className="p-6 space-y-6 bg-card">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{t('email.subject')}</p>
              <hr className="border-border" />
            </div>

            <div className="space-y-4">
              <p className="text-foreground">{t('email.greeting')}</p>
              
              <p className="text-foreground leading-relaxed">
                {t('email.body')}
              </p>

              <p className="text-foreground leading-relaxed font-medium">
                {t('email.question')}
              </p>

              {/* NPS Scale */}
              <div className="space-y-3">
                <div className="grid grid-cols-11 gap-1.5">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                    <button
                      key={score}
                      onClick={() => navigate(`/survey?score=${score}`)}
                      className="aspect-square rounded-lg font-semibold text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 border-2 border-border"
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
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {t('common.clickToRate')}
              </p>
            </div>
          </div>

          {/* Email Footer */}
          <div className="bg-muted p-6 text-center space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Generation Fertility</p>
              <p className="text-xs text-muted-foreground">
                9401 Jane St #200, Vaughan, ON L6A 4H7
              </p>
              <p className="text-xs text-muted-foreground">
                Phone: (905) 597-4483
              </p>
            </div>
            <div className="pt-2 border-t border-border space-y-1">
              <p className="text-xs text-muted-foreground">
                {t('email.copyright')}
              </p>
              <button className="text-xs text-muted-foreground underline hover:text-foreground">
                {t('email.unsubscribe')}
              </button>
            </div>
          </div>
        </Card>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t('common.backToEntry')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Email;
