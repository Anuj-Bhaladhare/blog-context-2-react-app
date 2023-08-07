import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoriesPage = () => {

    const pageNavigate = useNavigate();
    const location = useLocation();
    const Category = location.pathname.split("/").at(-1); 

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => pageNavigate( -1 )}>Back</button>
                <h2>Blog On <span>{Category}</span></h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoriesPage;