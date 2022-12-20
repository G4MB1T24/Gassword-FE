import React from "react";

import { Button } from "@chakra-ui/react";

const handleLogout = () => { 
    localStorage.clear();
    window.location.reload();
}  

const Logout = () => {
  return (
    <>
      <Button onClick={handleLogout} colorScheme={"red"} size={"sm"}>Logout</Button>
    </>
  );
};

export default Logout;
