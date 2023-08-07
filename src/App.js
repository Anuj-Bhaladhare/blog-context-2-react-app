import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Tags from "./pages/Tags";
import Blogs from "./pages/Blogs";
// import Header from "./components/Header";
// import Blogs from "./components/Blogs";
// import Pagination from "./components/Pagination";





import { Route, Routes } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    // Fetch the inital Blogposts data
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
     <div>
        <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/blog/:blogID" element={<Blogs />}/>
           <Route path="/tags/:tag" element={<Tags />}/>
           <Route path="categories/:category" element={<Categories />}/>
        </Routes>
     </div>
  );
}
