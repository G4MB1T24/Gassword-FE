import React, { useState, useContext, useEffect } from "react";
import { Box, Flex, Input, InputGroup, Button } from "@chakra-ui/react";
import DataContext from "../Contexts/DataContext";

const CreateGass = () => {
  const context = useContext(DataContext);
  const { CreateGass } = context;
  const [Payload, setPayload] = useState({
    title: "",
    email: "",
    password: "",
  });

  const { title, email, password } = Payload;
  const [disabled, setdisabled] = useState(true);

  useEffect(() => {
    if (title.length >= 3 && email.length >= 3 && password.length >= 5) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [title, email, password]);

  const handleChange = (e) => {
    setPayload({ ...Payload, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    CreateGass(title, email, password);
    setTimeout(() => {
      setPayload({
        title: "",
        email: "",
        password: "",
      })
      document.getElementById("formmain").reset()
    }, 500);
  };

  return (
    <>
      <Box className="">
        <Flex h={"2xl"} justify={"center"} align={"center"}>
          <Box className="main">
            <form id="formmain">

            <Box className="rounded-lg" bgColor={"white"}>
              <Input
              className="input"
              size={"lg"}
              variant={"filled"}
              name="title"
              onChange={handleChange}
              placeholder="Title"
              />
            </Box>

            <Box className="rounded-lg" mt={"5"} bgColor={"white"}>
              <InputGroup w={"25rem"} size="lg">
                <Input
                className="input"
                variant={"filled"}
                pr="4.5rem"
                name="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
              </InputGroup>
            </Box>
            <Box className="rounded-lg" mt={"5"} bgColor={"white"}>
              <InputGroup w={"25rem"} size="lg">
                <Input
                className="input"
                onChange={handleChange}
                name="password"
                variant={"filled"}
                pr="4.5rem"
                placeholder="Enter password"
                />
              </InputGroup>
            </Box>
            <Box mt={"5"}>
              <Flex justify={"center"}>
                <Button disabled={disabled} onClick={Submit} size={"md"}>
                  Add
                </Button>
              </Flex>
            </Box>
                </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateGass;
