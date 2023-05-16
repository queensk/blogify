import React from "react";

export default function BlogSnips({ data, setCurrentBlog }) {
  return (
    <div className="blogSnipsContainer">
      {data.map((blog, index) => (
        <div key={index} className="blogSnip">
          <div className="blogImage">
            <img src={blog.image} alt="Blog" />
          </div>
          <div className="blogInfo">
            <h1 className="blogTitle">{blog.title}</h1>
            <h2 className="blogDate">{blog.date}</h2>
            <p className="blogDescription">
              {blog.description.slice(0, 30)}
              {blog.description.length > 30 ? "..." : ""}
            </p>
            <button
              className="readMoreButton"
              onClick={() => setCurrentBlog(blog)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
