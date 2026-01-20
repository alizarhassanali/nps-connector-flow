import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ClinicLogo from "@/components/ClinicLogo";

const SMS = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        {/* SMS Message Bubble */}
        <div className="bg-card/95 backdrop-blur rounded-3xl shadow-lg p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-semibold text-sm">HC</span>
            </div>
            <div className="flex-1 space-y-3">
              <div className="bg-muted rounded-2xl rounded-tl-sm p-4 border border-border">
                <p className="text-sm leading-relaxed text-foreground">
                  {t('sms.greeting')}
                </p>
                <p className="text-sm leading-relaxed text-foreground mt-2">
                  {t('sms.tapLink')}
                </p>
              </div>
              
              <Button 
                onClick={() => navigate('/survey')}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
              >
                {t('sms.takeSurvey')}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t('sms.stop')}
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
            {t('common.backToEntry')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SMS;
