import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Plans from "./pages/Plans.jsx";
import FAQ from "./pages/FAQ.jsx";
import Blog from "./pages/Blog.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/planes" element={<Plans />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
