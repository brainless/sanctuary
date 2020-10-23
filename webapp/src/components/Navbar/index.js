import React from "react";
import { Link } from "react-router-dom";

export default ({}) => {
  return (
    <nav
      className="fixed top-0 w-screen flex items-center bg-white border-b border-gray-300 px-6 py-3 z-10"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="mx-4">
        <Link className="font-semibold text-gray-700" to="/">
          Home
        </Link>
      </div>

      <div className="block lg:inline-block lg:mt-0 px-4">&nbsp;</div>

      <div className="block lg:inline-block items-center"></div>

      <div className="block lg:inline-block flex-grow"></div>
    </nav>
  );
};
