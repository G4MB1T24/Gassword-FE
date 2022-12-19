import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../Css/index.css";
import DataContext from "../Contexts/DataContext";
import SignupLink from "./SignupLink";

const Navbar = () => {
  const context = useContext(DataContext);
  const { isAuthenticated } = context;

  let LoginSignup;
  if (isAuthenticated === true) {
    LoginSignup = <p className="hidden">Dumbfuck</p>;
  } else {
    LoginSignup = <SignupLink></SignupLink>;
  }

  if (localStorage.getItem("isLoggedin") === "true") { 
    LoginSignup = <p className="hidden">Dumbfuck</p>;
  } else {
    LoginSignup = <SignupLink></SignupLink>;
  }
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Text
              bgGradient={[
                "linear(to-tr, teal.300, yellow.400)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
              bgClip="text"
              fontSize="xl"
              fontWeight="extrabold"
            >
              Gassword
            </Text>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to={"/vault"} className="mr-5 hover:text-white">
              Vault
            </Link>
            <Link to={"/create"} className="mr-5 hover:text-white">
              Create
            </Link>
          </nav>
          {LoginSignup}
        </div>
      </header>
    </>
  );
};

export default Navbar;
