import React from "react";
import { FaNewspaper } from "react-icons/fa";

// ;
export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <p>
        Stay up to date with the latest articles, news, and exclusive offers
        from Blogify by subscribing to our newsletter.
      </p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">
          {" "}
          <FaNewspaper /> Subscribe
        </button>
      </form>
    </div>
  );
}
