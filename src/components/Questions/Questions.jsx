import { useState } from "react";

const questionsData = [
  {
    id: "01",
    question: "¿Los cursos son actualizados?",
    answer:
      "Nuestros cursos tienen un ciclo de vida donde cada 6 meses se realiza un actualización acorde al mundo laboral",
  },
  {
    id: "02",
    question: "¿Para quienes son estos cursos?",
    answer:
      "Nuestros cursos están diseñados para personas que desean iniciar o mejorar su carrera en tecnología.",
  },
  {
    id: "03",
    question: "¿Como funcionan las mentorías?",
    answer:
      "Las mentorías son sesiones personalizadas donde podrás resolver dudas específicas con expertos en el área.",
  },
  {
    id: "04",
    question: "¿Los cursos son certificados?",
    answer:
      "Sí, al completar el curso recibirás un certificado digital que valida tus conocimientos.",
  },
  {
    id: "05",
    question: "¿Existe una oportunidad laboral después de graduarse?",
    answer:
      "Contamos con una red de empresas asociadas que buscan talento entre nuestros graduados.",
  },
];

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState("01");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-gray-600 py-8 text-xl">
              ¿Aún estás confundido? Contáctanos en el número +51 963489523
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            {questionsData.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full pb-4 flex items-center justify-between text-left"
                  onClick={() =>
                    setOpenQuestion(openQuestion === item.id ? "" : item.id)
                  }
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#2405f2] text-xl font-medium">
                      {item.id}
                    </span>
                    <span className="text-gray-900 text-xl font-medium">
                      {item.question}
                    </span>
                  </div>
                  <span className="text-3xl">
                    {openQuestion === item.id ? "×" : "+"}
                  </span>
                </button>
                {openQuestion === item.id && (
                  <div className="py-8 pl-12 pr-4 text-gray-600 text-lg">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
