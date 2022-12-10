import React, { useState } from "react";
import Decrypter from "./Decrypter";
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const DataItem = (props) => {
  const [Show, setShow] = useState(false);

  const updateState = () => {
    !Show ? setShow(true) : setShow(false);
  };

  let { title, password, dateCreated } = props;

  const ReadableDate = `${dateCreated.slice(5, 10)}/${dateCreated.slice(
    0,
    4
  )} at ${dateCreated.slice(11, 16)}`;

  return (
    <>
      <AccordionItem onClick={updateState}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} >
          {Show ? Decrypter(password) : password}
        </AccordionPanel>
        <AccordionPanel pb={4}>
          <Text fontSize={"11"} fontWeight={"bold"}>
            Created: {ReadableDate}
          </Text>{" "}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default DataItem;
