import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import ClinicLogo from "@/components/ClinicLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

const Confirmation = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 shadow-lg text-center space-y-6 bg-card/95 backdrop-blur">
          
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              {t('thankYou')}
            </h1>
            <p className="text-muted-foreground">
              {t('receivedFeedback')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('committedToImproving')}
            </p>
          </div>

        </Card>

        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Confirmation;
