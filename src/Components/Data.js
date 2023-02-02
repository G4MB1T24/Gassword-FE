import React, { useContext, useEffect } from "react";
import { Box, Accordion } from "@chakra-ui/react";
import DataContext from "../Contexts/DataContext";
import DataItem from "./DataItem";
import "../Css/index.css";
const Data = () => {
  const context = useContext(DataContext);
  const { GetData, Gassword } = context;
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Box m={2} p={2} className="noscroll">
        <Accordion allowToggle>
          {Gassword.map((gassword, key) => {
            return (
              <DataItem
                key={key}
                title={gassword.title}
                password={gassword.password}
                dateCreated={gassword.dateCreate}
                mail={gassword.mail}
                id={gassword._id}
              ></DataItem>
            );
          })}
        </Accordion>
      </Box>
    </>
  );
};

export default Data;
