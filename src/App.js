import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import TagsPage from "./pages/TagsPage";
import BlogsPage from "./pages/BlogsPage";



const App = () => {

  const { fetchBlogPosts } = useContext(AppContext);
  const [SearchParams, setSearchParams] = useSearchParams()
  const location = useLocation();

  useEffect(() => {
     const page = SearchParams.get("page") ?? 1;

     if(location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
     }
     else if(location.pathname.includes("categories")) {
      const categories = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, categories);
     }
     else{
      fetchBlogPosts(Number(page));
     }
  }, [location.pathname, location.page]);

  return (
     <div>
        <Routes>
           <Route path="/" element={<HomePage />}/>
           <Route path="/blog/:blogID" element={<BlogsPage />}/>
           <Route path="/tags/:tag" element={<TagsPage />}/>
           <Route path="categories/:category" element={<CategoriesPage />}/>
        </Routes>
     </div>
  );
}

export default App;