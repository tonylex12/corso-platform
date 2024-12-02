import { useState } from "react";
import keyboardBg from "../../assets/img/keyboard-bg.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Background Image and Text */}
        <div
          className="relative bg-cover bg-center p-8 md:p-24 text-white"
          style={{ backgroundImage: `url(${keyboardBg})` }}
        >
          <div className="absolute inset-0 bg-[#100324] opacity-70" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">
              Un paso más
              <br />
              cerca de tus metas
            </h1>
            <p className="text-lg py-8 md:py-16">
              La plataforma perfecta para ayudarte a convertirte
              <br />
              en un experto y adquirir las skills necesarias.
            </p>
          </div>
        </div>

        {/* Right side - Registration Form */}
        <div className="bg-[#100324] p-8 md:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-bold text-white mb-2">Registro</h2>
            <p className="text-gray-300 mb-8">
              Prepárate para alcanzar tus objetivos
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="py-6">
                <button
                  type="submit"
                  className="w-full bg-[#ffc329] text-[#100324] font-semibold py-3 rounded-lg hover:bg-[#ffc329]/70 transition-colors"
                >
                  Registrarse
                </button>
              </div>
            </form>

            <p className="text-center text-gray-300 mt-6">
              Ya tiene una cuenta?{" "}
              <a href="#" className="text-white underline">
                Ingresar
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
