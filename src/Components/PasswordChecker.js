import React from "react";
import { Input, Button, InputRightElement, InputGroup } from "@chakra-ui/react";
const PasswordChecker = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <div className="container  w-64">
        <h2 className="my-2">Enter your Encryption key</h2>
        <ul>
          <li className=" m-4 text-sm font-bold">
            Do you still remember your Encryption key?
          </li>
        </ul>
        <InputGroup size="md">
          <Input
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
      </div>
    </>
  );
};

export default PasswordChecker;
