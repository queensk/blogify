import React from "react";
import Blog from "../components/blog";
import BlogSnips from "../components/blogSnips";

export default function Home({
  data,
  setCurrentBlog,
  title,
  date,
  description,
  article,
  image,
}) {
  return (
    <div className="App">
      <div className="blog">
        {
          <Blog
            title={title}
            date={date}
            description={description}
            article={article}
            image={image}
          />
        }
      </div>
      <div className="blogSnips">
        {<BlogSnips data={data} setCurrentBlog={setCurrentBlog} />}
      </div>
    </div>
  );
}
