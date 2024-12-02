import { useState, useEffect } from "react";

const testimonialData = [
  {
    id: 1,
    name: "Sara Johns",
    role: "Front-end developer",
    content:
      "El material presentado es fácil de entender, la calidad de los instructores es muy buena y las respuestas son rápidas. ¡¡Así que recomiendo ampliamente los cursos aquí!! ",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full-stack Developer",
    content:
      "Los cursos son increíblemente prácticos y actualizados. La plataforma es intuitiva y el soporte técnico es excelente. ¡Una experiencia de aprendizaje excepcional!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Laura Martinez",
    role: "UX Designer",
    content:
      "Como diseñadora, aprecio mucho la calidad del contenido y la estructura del curso. Los proyectos prácticos son muy relevantes para el mundo real.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Backend Developer",
    content:
      "La profundidad del contenido técnico es impresionante. Los instructores explican conceptos complejos de manera clara y concisa. Totalmente recomendado.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Ana Silva",
    role: "Mobile Developer",
    content:
      "Los cursos de desarrollo móvil son excelentes. La combinación de teoría y práctica es perfecta para aprender y aplicar los conocimientos inmediatamente.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#eef4fa] py-16">
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-4">
              Testimonios reales sobre CORSO
            </h2>
            <p className="text-gray-600">
              Más de 10.000 estudiantes han confiado en CORSO.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="bg-[#eef4fa] p-8">
              <p className="text-xl text-gray-800 mb-6 text-justify">
                &quot;{testimonialData[currentSlide].content}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonialData[currentSlide].image}
                    alt={testimonialData[currentSlide].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonialData[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonialData[currentSlide].role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {testimonialData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-[#2405f2]"
                          : "bg-[#2405f2]/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
