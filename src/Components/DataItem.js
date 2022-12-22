import React, { useContext, useState  } from "react";
import Decrypter from "./Decrypter";
import DataContext from "../Contexts/DataContext";
import {
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Flex,
} from "@chakra-ui/react";
const DataItem = (props) => {
  const context = useContext(DataContext);
  const { Delete } = context;
  const [Show, setShow] = useState(false);
  
  const handleClose = () => setShow(!Show);

  let { title, password, dateCreated, mail , id } = props;
  
  const handleDelete  = async () => {
    Delete(id)
  }
  const ReadableDate = `${dateCreated.slice(5, 10)}/${dateCreated.slice(
    0,
    4
  )} at ${dateCreated.slice(11, 16)}`;

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text fontFamily={"sans-serif"} fontWeight={"bold"}>
            Email: {mail}
          </Text>
          {Show ? Decrypter(password) : password}{" "}
          <Flex>
            <Button
              bgColor={"ActiveBorder"}
              justifySelf={"end"}
              mt={3}
              size={"sm"}
              onClick={handleClose}
            >
              Show!
            </Button>
            <Button
              
              mx={2}
              colorScheme={"red"}
              mt={3}
              size={"sm"}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Flex>
        </AccordionPanel>
        <AccordionPanel mt={-5} pb={4}>
          <Text mt={2} fontSize={"11"} fontWeight={"bold"}>
            Created: {ReadableDate}
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default DataItem;
