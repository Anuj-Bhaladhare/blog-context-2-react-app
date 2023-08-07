import React, { useContext, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogsPage = () => {

    const[blog, setBlog] = useState();
    const[relatedBlog, setReletadeBlog] = useState();
    const[loading, setLoading] = useContext(AppContext);
    const location = useLocation();
    const navigation = useNavigation();
    const blogID = location.pathname.split("/").at( -1 );

    const fetchBlogLocation = async() => {
        
    }

    return (

        <div>
            BlogsPage
        </div>
    )
}

export default BlogsPage;