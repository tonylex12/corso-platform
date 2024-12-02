import AboutUs from "../components/AboutUs/AboutUs";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import RecommendedCourses from "../components/RecommendedCourses/RecommendedCourses";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";
import Questions from "../components/Questions/Questions";
import Register from "../components/Register/Register";
import MoreInfo from "../components/MoreInfo/MoreInfo";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <Features />
      <AboutUs />
      <RecommendedCourses />
      <Testimonials />
      <Questions />
      <Register />
      <MoreInfo />
    </>
  );
};

export default Home;
