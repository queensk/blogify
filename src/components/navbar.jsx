import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineBook,
  AiOutlineMail,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>Blogify</h1>
      </Link>
      <div className="nav-links">
        <Link to="/about">
          <AiOutlineInfoCircle />
          About
        </Link>
        <Link to="/">
          {" "}
          <AiOutlineBook />
          Blog
        </Link>
        <Link to="/newsletter">
          <AiOutlineMail />
          Newsletter
        </Link>
        <Link to="/faqs">
          <AiOutlineQuestionCircle />
          FAQs
        </Link>
      </div>
    </nav>
  );
}
