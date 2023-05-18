import React from "react";

export default function footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear().toString()} Blogify. All rights
          reserved. | Today's date {new Date().toLocaleDateString()}
        </p>
        <p>Contact: Blogify@email.com</p>
        <p>By Queens Kisivuli</p>
      </div>
    </footer>
  );
}
