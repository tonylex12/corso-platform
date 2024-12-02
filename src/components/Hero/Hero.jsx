import codingImg from "../../assets/img/coding.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="bg-[#100324]/90 py-8 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-white py-12 md:py-24 px-3">
            <h1 className="text-[2rem] md:text-[2rem] font-bold mb-6 leading-[4rem]">
              Construye y crea tus sueños junto a CORSO
            </h1>
            <p className="text-lg text-gray-300 py-8">
              CORSO es la plataforma perfecta con cursos y rutas de aprendizaje
              para ayudarte a alcanzar tus metas en el campo de la tecnología.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link
                to="/cursos"
                className="bg-[#ffc329] text-black px-8 py-2 rounded-md font-medium hover:bg-[#ffa500] transition-colors"
              >
                Ver cursos
              </Link>
              <Link
                to="/planes"
                className="ml-4 flex items-center text-white hover:text-[#ffc329] transition-colors"
              >
                Ver planes
                <HiArrowRight className="h-6 w-6 ml-2" />
              </Link>
            </div>
          </div>
          <div className="h-full flex items-center justify-center p-8">
            <img
              src={codingImg}
              alt="Coding illustration"
              className="object-contain w-4/5 max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
