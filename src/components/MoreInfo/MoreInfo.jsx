import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import blogImage1 from "../../assets/img/blog-1.png";
import blogImage2 from "../../assets/img/blog-2.png";
import blogImage3 from "../../assets/img/blog-3.png";

const blogPosts = [
  {
    id: 1,
    date: "19 Jan 2022",
    title: "Maneras fáciles de comenzar a aprender a programar - CORSO",
    description: "Tips y consejos necesarios",
    image: blogImage1,
  },
  {
    id: 2,
    date: "19 Jan 2022",
    title: "Consejos para crear una página web empresarial - CORSO",
    description: "Tips y consejos necesarios",
    image: blogImage2,
  },
  {
    id: 3,
    date: "19 Jan 2022",
    title: "Como iniciar con React JS",
    description: "Tips y consejos necesarios",
    image: blogImage3,
  },
];

const MoreInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#100324]">
            Blog, Noticias y Eventos
          </h2>
          <Link
            to="/blog"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            Ver todo
            <IoIosArrowForward className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-auto">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-[#100324] hover:text-gray-700">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center mt-4 text-gray-600 hover:text-gray-900 pt-8"
                >
                  Ver más
                  <IoIosArrowForward className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
