import clinicLogo from "@/assets/clinic-logo.svg";

const ClinicLogo = () => {
  return (
    <div className="flex justify-center mb-8">
      <img 
        src={clinicLogo} 
        alt="Generation Fertility Clinic" 
        className="h-16 w-auto"
      />
    </div>
  );
};

export default ClinicLogo;
