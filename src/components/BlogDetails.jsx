import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
    return (
        <div>
            <NavLink to={`/blog/${post.id}`}>
                <p>{post.title}</p>
            </NavLink>
            <div>
                <p>
                {`By ${post.author} on ${<NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}><p>{post.category}</p></NavLink>}`}  
                </p>
                <p>Posted ov {post.date}</p>  
                <p>{post.content}</p>
                <div>
                    {
                        post.tags.map( (tag, index) => {
                            return (
                                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                                    <p>#{tag}</p>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;