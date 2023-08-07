import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails.jsx";

const BlogsPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState();
  const [relatedBlog, setReletadeBlog] = useState();
  const [loading, setLoading] = useContext(AppContext);
  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").at(-1);

  const fetchRelatedBlogs = async () => {
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    setLoading(true);
    try {
      const responce = await fetch(url);
      const data = await responce.json();

      setBlog(data.blog);
      setReletadeBlog(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setReletadeBlog([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <div>
          {loading ? (
            <div>Loading</div>
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              <h2>Related Blog</h2>
              {relatedBlog.map((post) => (
                <div>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div>No Blog Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
