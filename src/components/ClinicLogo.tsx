import clinicLogo from "@/assets/clinic-logo.svg";
import LanguageSelector from "./LanguageSelector";

const ClinicLogo = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mb-8 gap-3">
      <img 
        src={clinicLogo} 
        alt="Generation Fertility Clinic" 
        className="h-16 w-auto"
      />
      <LanguageSelector />
    </div>
  );
};

export default ClinicLogo;
