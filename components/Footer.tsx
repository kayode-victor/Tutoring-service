import React from "react";

const Footer = () => {
  return (
    <div className="my-2">
      <hr className="border-t border-gray-300 mb-2" /> {/* Dividing line */}
      <footer className="text-center font-light text-sm">
        <p>
          &copy; {new Date().getFullYear()} by{" "}
          <span className="text-primary font-normal">KV4BIZ</span> . All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
