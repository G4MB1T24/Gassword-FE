import React, { useContext, useEffect } from "react";
import { Box, Accordion } from "@chakra-ui/react";
import DataContext from "../Contexts/DataContext";
import DataItem from "./DataItem";
const Data = () => {
  const context = useContext(DataContext);
  const { GetData, Gassword } = context;
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Box m={2} p={2}>
        <Accordion allowToggle>
          {Gassword.map((gassword, key) => {
            return (
              <DataItem
                key={key}
                title={gassword.title}
                password={gassword.password}
                dateCreated={gassword.dateCreate}
              ></DataItem>
            );
          })}
        </Accordion>
      </Box>
    </>
  );
};

export default Data;
