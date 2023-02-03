
import React, { useContext } from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../Css/index.css";
import DataContext from "../Contexts/DataContext";
import SignupLink from "./SignupLink";
import Logout from "../Auth/Logout";

const Navbar = () => {
  const context = useContext(DataContext);
  const { isAuthenticated } = context;

  let LoginSignup;
  if (isAuthenticated === true) {
    LoginSignup = <Box className="hidden"></Box>;
  } else {
    LoginSignup = <SignupLink />;
  }

  if (localStorage.getItem("isLoggedin") === "true") {
    LoginSignup = <Box className="hidden"></Box>;
  } else {
    LoginSignup = <SignupLink />;
  }

  return (
    <Box
      as="header"
      bg="gray.900"
      color="white"
      p="5"
      className="body-font"
      display="flex"
      flexWrap="wrap"
    >
      <Flex
        className="container mx-auto"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        px={["5", "5", "0"]}
      >
        <Link
          to="/"
          className="title-font font-medium text-white"
          display={["block", "block", "none"]}
        >
          <Text
            as="span"
            fontWeight="extrabold"
            fontSize="xl"
            bgGradient={[
              "linear(to-tr, teal.300, yellow.400)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-b, orange.100, purple.300)",
            ]}
            bgClip="text"
          >
            Gassword
          </Text>
        </Link>
        <nav className="text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/vault" className="mr-5 hover:text-white">
            Vault
          </Link>
          <Link to="/create" className="mr-5 hover:text-white">
            Create
          </Link>
          <Box display={["none", "inline", ]}>
            {localStorage.getItem("isLoggedin") === "true" ? (
              <Logout />
            ) : (
              <Box className="hidden"></Box>
            )}
          </Box>
        </nav>
        {LoginSignup}
      </Flex>
    </Box>
  );
};

export default Navbar;

