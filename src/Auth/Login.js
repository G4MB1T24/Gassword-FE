import React, { useContext, useState, useEffect } from "react";
import "../Css/profile.css";
import "../Css/index.css";
import {
  Text,
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import DataContext from "../Contexts/DataContext";

const Login = () => {
  const context = useContext(DataContext);
  const { Login} = context;

  const [disabled, setdisabled] = useState(true);
  const [show, setShow] = React.useState(false);

  const [Creds, setCreds] = useState({ email: "", password: "", mpin: "" ,  enc_key: ""});
  const { email, password, mpin , enc_key } = Creds;

  useEffect(() => {
    if (mpin.length === 4 && email.length > 0 && password.length > 5 && enc_key.length > 4) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [mpin, email, password , enc_key]);

  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    setCreds({ ...Creds, [e.target.name]: e.target.value });
  };

  const FormSubmit = () => {
    Login(email, password, mpin , enc_key);
  };

  return (
    <>
      <div className="gradient-background">
        <Box className="">
          <Flex h={"2xl"} justify={"center"} align={"center"}>
            <Box className="main">
              <Text
                fontSize={"4xl"}
                fontFamily={"sans-serif"}
                fontWeight={"bold"}
                color={"white"}
              >
                Login
              </Text>
              <Box className="rounded-lg" bgColor={"white"}>
                <Input
                  value={Creds.email}
                  name="email"
                  onChange={handleChange}
                  size={"lg"}
                  variant={"filled"}
                  placeholder="Your email"
                />
              </Box>
              <Box className="rounded-lg" mt={"5"} bgColor={"white"}>
                <InputGroup w={"25rem"} size="lg">
                  <Input
                    value={Creds.password}
                    onChange={handleChange}
                    name="password"
                    variant={"filled"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button bg={"gray.300"} size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box className="rounded-lg" mt={"5"} bgColor={"white"}>
                <InputGroup w={"25rem"} size="lg">
                  <Input
                    value={Creds.enc_key}
                    onChange={handleChange}
                    name="enc_key"
                    variant={"filled"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button bg={"gray.300"} size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Box mt={"5"} className="rounded-lg">
                <Input
                  justifyItems={"center"}
                  value={Creds.mpin}
                  name="mpin"
                  onChange={handleChange}
                  size={"md"}
                  variant={"filled"}
                  placeholder="MPIN"
                  w={"20"}
                />
              </Box>
              <Box mt={"5"}>
                <Flex justify={"center"}>
                  <Button disabled={disabled} onClick={FormSubmit} size={"md"}>
                    Login
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default Login;
