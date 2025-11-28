import clinicLogo from "@/assets/clinic-logo.png";

const ClinicLogo = () => {
  return (
    <div className="flex justify-center mb-6">
      <img 
        src={clinicLogo} 
        alt="Generation Fertility Clinic" 
        className="h-20 w-auto drop-shadow-md"
      />
    </div>
  );
};

export default ClinicLogo;
