import React from "react";
import Header from "../components/Header.jsx";
import Blogs from "../components/Blogs.jsx";
import Pagination from "../components/Pagination.jsx";

const HomePage = () => {
    return (
        <div>
           <Header />
           <div>
                <Blogs />
                <Pagination />
           </div>
        </div>
    )
}

export default HomePage;