import React, { useContext , useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import DataContext from "../Contexts/DataContext";
import PasswordChecker from "../Components/PasswordChecker";
import "../Css/index.css"
const Home = () => {
  const context = useContext(DataContext);
  const { GetUser , User } = context;
  useEffect(() => {
    GetUser();
  })
 
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
        className="scrollblock flex justify-center items-center"
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
          Welcome User {User}
        </Text>
      </motion.div>
    
        <PasswordChecker></PasswordChecker>
      
    </>
  );
};

export default Home;
