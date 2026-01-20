import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";

const ThankYouPassive = () => {
  const { t } = useTranslation();

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
              {t('thankYou.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('thankYou.passiveMessage')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('thankYou.improvementNote')}
            </p>
          </div>

        </Card>
      </div>
    </div>
  );
};

export default ThankYouPassive;
