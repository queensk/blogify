import React from "react";

export default function BlogSnips({ data, setCurrentBlog }) {
  return (
    <div className="blogSnipsContainer">
      {data.map((blog, index) => (
        <div key={index} className="blogSnip">
          <div className="blogImage">
            <img
              src="../public/_93d537c5-296d-4878-9d63-4fd2ba5a2aeb.jpg"
              // src={blog.image}
              alt="Blog"
            />
          </div>
          <div className="blogInfo">
            <h1 className="blogTitle">{blog.title}</h1>
            <h2 className="blogDate">{blog.date}</h2>
            <p className="blogDescription">
              {blog.description.slice(0, 30)}
              {blog.description.length > 30 ? "..." : ""}
            </p>
            <a className="readMoreButton" onClick={() => setCurrentBlog(blog)}>
              Read More{">"}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
