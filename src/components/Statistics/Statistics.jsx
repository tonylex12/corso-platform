import { FaCode, FaVial, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";

const Statistics = () => {
  const partners = [
    { name: "BYTES", icon: <FaCode size={24} /> },
    { name: "HEX-CODE", icon: <BiCodeBlock size={24} /> },
    { name: "TESTFUL", icon: <FaVial size={24} /> },
    { name: "NEOCODE", icon: <FaLaptopCode size={24} /> },
    { name: "WEBDEVS", icon: <FaGlobe size={24} /> },
  ];

  return (
    <div className="bg-[#eef4fa] py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <span className="font-bold text-2xl md:text-3xl">10.000+</span>
                <p className="mt-2 text-gray-600">Estudiantes</p>
              </div>
              <div className="text-center md:text-left">
                <span className="font-bold text-2xl md:text-3xl">100+</span>
                <p className="mt-2 text-gray-600">Instructores</p>
              </div>
              <div className="text-center md:text-left">
                <span className="font-bold text-2xl md:text-3xl">150+</span>
                <p className="mt-2 text-gray-600">Cursos</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-3">
                <div className="text-[#100324]">{partner.icon}</div>
                <span className="font-bold text-base md:text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
