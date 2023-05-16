import { useState } from "react";
import "./App.css";
import Blog from "./components/blog";
import BlogSnips from "./components/blogSnips";

const data = [
  {
    title: "One on the Moon",
    date: "2022-03-20",
    description: "This is the description",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante mauris. Suspendisse euismod bibendum risus, et condimentum elit viverra non. Aenean scelerisque aliquam dolor vel tincidunt. Nunc accumsan eros ac eros iaculis gravida. Integer ac metus interdum, fringilla urna id, tempus mauris. Sed auctor ullamcorper quam, id malesuada risus. Sed id mauris non arcu varius laoreet non sit amet ex. Sed scelerisque ligula sed mi auctor, ut semper diam aliquet. Phasellus quis ligula vestibulum, venenatis nibh et, interdum turpis. Maecenas laoreet justo quis elit eleifend, nec rutrum lorem interdum. Proin malesuada fringilla magna, vitae sollicitudin ante tempor non. Sed pulvinar ultricies dui ac dictum. Etiam pulvinar turpis eget dapibus tristique. Sed sed turpis in ipsum placerat bibendum. Phasellus at sem vel lacus accumsan malesuada.",
    image: "https://example.com/image.jpg",
  },
  {
    title: "Two in the Sky",
    date: "2022-04-05",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    article: "",
    image: "",
  },
  {
    title: "Three by the Sea",
    date: "2022-05-15",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    article: "",
    image: "",
  },
  {
    title: "Four in the Forest",
    date: "2022-06-10",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    article: "",
    image: "",
  },
  {
    title: "Five in the Field",
    date: "2022-07-25",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    article: "",
    image: "",
  },
  {
    title: "Six under the Sun",
    date: "2022-08-12",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    article: "",
    image: "",
  },
  {
    title: "Seven in the City",
    date: "2022-09-30",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    article: "",
    image: "",
  },
  {
    title: "Eight in the Mountains",
    date: "2022-10-18",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    article: "",
    image: "",
  },
  {
    title: "Nine by the River",
    date: "2022-11-05",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    article: "",
    image: "",
  },
  {
    title: "Ten in the Desert",
    date: "2022-12-20",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    article: "",
    image: "",
  },
];
function App() {
  const [currentBlog, setCurrentBlog] = useState(data[0]);
  const { title, date, description, article, image } = currentBlog;

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

export default App;
