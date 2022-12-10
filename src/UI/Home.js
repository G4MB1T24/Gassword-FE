import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DataContext from "../Contexts/DataContext";
import PasswordChecker from "../Components/PasswordChecker";
import "../Css/index.css"

const Home = () => {
  const context = useContext(DataContext);
  const { a } = context;
  return (
    <>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{ type: "spring" }}
        className="noscroll overflowY-auto flex justify-center items-center"
      >
        <Text
          bgGradient={[
            "linear(to-tr, teal.300, red.500)",
            "linear(to-b, orange.100, purple.300)",
            "linear(to-b, blue.300, green.300)",
          ]}
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome User {a}
        </Text>
      </motion.div>
    
        <PasswordChecker></PasswordChecker>
      
    </>
  );
};

export default Home;
