import aboutUsImage from "../../assets/img/about-us.png";

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-gray-600 mb-4 block">Sobre nosotros</span>
            <h2 className="text-[2rem] md:text-[2rem] font-bold mb-6 leading-[4rem]">
              CORSO, tu plataforma perfecta para ayudarte a cumplir tus metas
            </h2>
            <p className="text-gray-600 text-lg">
              Trabajamos para ser considerados la mejor plataforma digital en el
              campo de la tecnología.
            </p>
          </div>
          <div>
            <img
              src={aboutUsImage}
              alt="Equipo de CORSO trabajando"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
