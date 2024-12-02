import bgfeature from "../../assets/img/bg-feature.png";

const featuresList = [
  {
    id: 1,
    title: "Cursos de calidad",
    description:
      "En CORSO cada curso está diseñado meticulosamente para cubrir cada aspecto del curso en mención y ayudarte a ser un experto en el tema.",
  },
  {
    id: 2,
    title: "Rutas de aprendizaje",
    description:
      "Rutas específicas para lo que quieras ser, ya sea Frontend, Backend, DevOps, Data Science y más.",
  },
  {
    id: 3,
    title: "Grupos de ayuda",
    description:
      "Aprende con una comunidad que te ayudará a resolver tus dudas y a poder tener un networking apropiado.",
  },
  {
    id: 4,
    title: "Certificaciones",
    description:
      "Certificaciones calificadas previa proyecto certificador que demuestre que tienes las habilidades necesarias para alcanzar la certificación calificada.",
  },
  {
    id: 5,
    title: "Mentorías",
    description:
      "Cada alumno cuenta con un mentor con el cual puede comunicarse siempre para resolver dudas y pedir ayuda o guía en cualquier cosa que impida su avance.",
  },
  {
    id: 6,
    title: "Instructores calificados",
    description:
      "Instructores experimentados y que han trabajado en el área que enseñan y que dictan el curso con un módulo de prácticas o crear proyectos reales.",
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Beneficios de unirse a<br />
          CORSO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#F8F9FF] p-6 hover:shadow-lg transition-shadow rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <img
                    src={bgfeature}
                    alt=""
                    className="absolute inset-0 w-full h-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    {feature.id}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
