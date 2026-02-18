import clinicLogo from "@/assets/clinic-logo.svg";

const ClinicLogo = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-md mb-8">
      <img 
        src={clinicLogo} 
        alt="Generation Fertility Clinic" 
        className="h-16 w-auto"
      />
    </div>
  );
};

export default ClinicLogo;
