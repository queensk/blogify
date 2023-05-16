import React from "react";

export default function Blog({ title, date, image, article }) {
  return (
    <div className="blog-data">
      <div className="blog-header">
        <h1>{title}</h1>
        <h2> published {date}</h2>
      </div>

      <img
        src="../public/_93d537c5-296d-4878-9d63-4fd2ba5a2aeb.jpg"
        // src={image}
        alt="Blog"
      />
      <div className="blog-body">
        <p>{article}</p>
      </div>
    </div>
  );
}
