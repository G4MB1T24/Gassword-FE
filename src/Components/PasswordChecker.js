import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Flex,
} from "@chakra-ui/react";

const PasswordChecker = () => {

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [Checker, setChecker] = useState("");
  const handleChange = (e) => {
    setChecker(e.target.value);
  };
  const CheckGate = () => {
    if (Checker === localStorage.getItem("enc_key")) {
      localStorage.setItem("enc_key", Checker);
      alert("Correct");
    } else {
      alert("Not Correct");
    }
  };
  return (
    <>
      <Box h={"9vh"}>
        <Flex justify={"center"} align={"center"}>
          <Box>
            <Box>
              <Text fontWeight={"bold"}>Do you still remember your Encryption key?</Text>
            </Box>
            <Box mt={1}>
              <InputGroup size="md">
                <Input
                  onChange={handleChange}
                  name="checker"
                  value={Checker}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box mt={5}>
              <Flex justify={"center"}>
                <Button onClick={CheckGate}>Submit</Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PasswordChecker;
