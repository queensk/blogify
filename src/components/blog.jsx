import React from "react";
import { FaLink } from "react-icons/fa";

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
          <React.Fragment key={index}>
            {paragraph.length < 50 && (
              <h1 className="blog-tittle-color">
                {paragraph}
                <span className="blog-tittle-icon">
                  <FaLink />
                </span>
              </h1>
            )}
            {paragraph.length > 50 && <p>{paragraph}</p>}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
