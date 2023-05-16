import React from "react";

export default function Blog({ title, date, image, article }) {
  const paragraphs = article.split("\n");
  return (
    <div className="blog-data">
      <div className="blog-header">
        <h1>{title}</h1>
        <h2> published {date}</h2>
      </div>
      <img src={image} alt="Blog" />
      <div className="blog-body">
        {paragraphs.map((paragraph, index) => (
          <>
            <p key={index}>{paragraph}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
