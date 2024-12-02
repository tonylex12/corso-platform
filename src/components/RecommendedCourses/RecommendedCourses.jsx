import webDevImg from "../../assets/img/web-dev.png";
import marketingImg from "../../assets/img/marketing.png";
import dataImg from "../../assets/img/data-science.png";
import { BiTime, BiVideo, BiUser } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Desarrollo Web",
    description: "Desde las bases, hasta convertirte en experto.",
    image: webDevImg,
    rating: 4.9,
    duration: "4,5 Horas",
    videos: "20 Videos",
    students: "1.900 Alumnos",
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Desde las bases, hasta convertirte en experto.",
    image: marketingImg,
    rating: 4.9,
    duration: "6,2 Horas",
    videos: "32 Videos",
    students: "930 Alumnos",
  },
  {
    id: 3,
    title: "Ciencia de Datos",
    description: "Desde las bases, hasta convertirte en experto.",
    image: dataImg,
    rating: 4.9,
    duration: "8 Horas",
    videos: "46 Videos",
    students: "1.043 Alumnos",
  },
];

const RecommendedCourses = () => {
  return (
    <div className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Los cursos más recomendados</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base">
              Categoría <IoIosArrowDown />
            </button>
            <Link
              to="/cursos"
              className="px-4 md:px-6 py-2 bg-[#ffc329] rounded-lg font-medium hover:bg-[#e6af25] transition-colors text-sm md:text-base"
            >
              Ver Todo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 md:h-auto object-cover"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-[#100324] text-white px-2 py-1 rounded-xl text-sm">
                  <AiFillStar className="text-[#ffc329]" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{course.description}</p>
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <BiTime /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BiVideo /> {course.videos}
                  </div>
                  <div className="flex items-center gap-1">
                    <BiUser /> {course.students}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourses;
