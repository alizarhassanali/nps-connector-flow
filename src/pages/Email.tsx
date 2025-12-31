import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ClinicLogo from "@/components/ClinicLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

const Email = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-lg animate-fade-in">
        <Card className="shadow-xl overflow-hidden bg-card/95 backdrop-blur">
          <div className="bg-primary p-6 text-center">
            <h2 className="text-xl font-bold text-primary-foreground">{t('weValueFeedback')}</h2>
          </div>

          <div className="p-6 space-y-6 bg-card">
            <div className="space-y-4">
              <p className="text-foreground">{t('dearPatient')}</p>
              <p className="text-foreground leading-relaxed">{t('emailBody1')}</p>
              <p className="text-foreground leading-relaxed font-medium">{t('howLikelyRecommend')}</p>

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
                <div className="flex justify-between text-xs text-muted-foreground px-1">
                  <span>{t('notLikely')}</span>
                  <span>{t('veryLikely')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 text-center space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">{t('clinicName')}</p>
              <p className="text-xs text-muted-foreground">9401 Jane St #200, Vaughan, ON L6A 4H7</p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-sm text-muted-foreground hover:text-foreground">
            {t('backToEntryOptions')}
          </Button>
        </div>

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Email;
