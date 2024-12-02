import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#100324] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Primera columna (2fr) */}
            <div className="md:col-span-2 space-y-4">
              <Link to="/" className="text-[#fff] text-2xl font-bold block">
                [CORSO]
              </Link>
              <p className="text-gray-300 max-w-md">
                Te ayudamos a acelerar tus metas y a convertirte en un experto
              </p>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programas */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Programas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Libre Aprendizaje
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Emprendimientos
                  </Link>
                </li>
              </ul>
            </div>

            {/* AYUDA */}
            <div>
              <h3 className="text-lg font-semibold mb-4">AYUDA</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#ffc329] transition-colors"
                  >
                    Políticas de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="md:w-[30%]">
            <div className="bg-[#ffc329] mt-12">
              <div className="px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#100324]">Email</h4>
                    <p className="text-[#100324]">contact@website.com</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#100324]">Teléfono</h4>
                    <p className="text-[#100324]">+ 963489523</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[#100324]">
              &copy; Copyright CORSO 2024
            </div>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-[#100324] hover:text-[#ffc329] transition-colors"
                >
                  INICIO
                </Link>
              </li>
              <li>
                <Link
                  to="/cursos"
                  className="text-[#100324] hover:text-[#ffc329] transition-colors"
                >
                  CURSOS
                </Link>
              </li>
              <li>
                <Link
                  to="/planes"
                  className="text-[#100324] hover:text-[#ffc329] transition-colors"
                >
                  PLANES
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-[#100324] hover:text-[#ffc329] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[#100324] hover:text-[#ffc329] transition-colors"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
