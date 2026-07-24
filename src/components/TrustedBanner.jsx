
import {
    ShieldCheck,
    Monitor,
    
    Rocket,
    Settings,
    
  } from "lucide-react";
  
function TrustedBanner() {

  
      const icons = [
        ShieldCheck,
        Monitor,
        
        Rocket,
        Settings,
      ];
  return (
    <div className="flex justify-center px-4 py-8  mt-32 hidden md:block ">
      <div className="flex items-center gap-4 max-w-4xl m-auto rounded-2xl border border-white/10 bg-[#111111]/90 px-5 py-3 shadow-xl backdrop-blur-lg">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-600">
          <ShieldCheck size={20} className="text-white" />
        </div>

        {/* Text */}
        <p className="flex-1 text-sm sm:text-base md:text-xl font-medium text-white">
          Trusted by businesses worldwide to build scalable digital solutions
        </p>

        {/* Right Icons */}
        <div className="hidden sm:flex items-center gap-2">
        {icons.map((Icon, index) => (
    <div
      key={index}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-pink-600"
    >
      <Icon size={18} className="text-white" />
    </div>
  ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedBanner;