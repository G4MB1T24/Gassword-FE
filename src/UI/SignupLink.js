import React from "react";
import { Link } from "react-router-dom";
const SignupLink = () => {
  return (
    <p>
      <Link
        to={"/login"}
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Login
      </Link>
      <Link
        to={"/signup"}
        className="mx-4 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        Sign Up!
      </Link>
    </p>
  );
};

export default SignupLink;
