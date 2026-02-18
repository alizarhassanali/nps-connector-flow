import { useTranslation } from "react-i18next";
import { ShieldX } from "lucide-react";
import { Card } from "@/components/ui/card";
import ClinicLogo from "@/components/ClinicLogo";
import LanguageSelector from "@/components/LanguageSelector";

const NoSurveyAccess = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <ClinicLogo />
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-6 md:p-8 shadow-lg bg-card/95 backdrop-blur text-center space-y-4">
          <div className="flex justify-center">
            <ShieldX className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            {t('noAccess.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('noAccess.message')}
          </p>
        </Card>
      </div>
      <div className="mt-8">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default NoSurveyAccess;
