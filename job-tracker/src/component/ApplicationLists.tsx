import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import ApplicationListPages from "./ApplicationListPages";
import { ExcelResponse } from "../hooks/useExcel";
import { useEffect, useState } from "react";

interface Props {
  passDownExcel: ExcelResponse | null;
}

const ApplicationLists = ({ passDownExcel }: Props) => {
 const [excel, setExcel] = useState<ExcelResponse | null>(null);
  const amountOfHeaders = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const amountOfRowsInAList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const amountOfColumnsInAList = amountOfHeaders;

  useEffect(() => {
    if (passDownExcel !== null){
      setExcel(passDownExcel);
    }
  }, [passDownExcel] || [excel]);

  useEffect(() => {
    //This is where im getting stuck at, im not able to index into the array of objects
    // console.log("applicationList state variable" , excel?.applications[0])  
  }, [excel])

  return (
    <Box height="300px">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {/* TODOS stopped here have to map over the json and fill out table */}
              {amountOfHeaders.map((header, index) => (
                <Th key={index}>row {header}</Th>
              ))}
              
            </Tr>
          </Thead>
          <Tbody>
            {amountOfRowsInAList.map((list) => (
              <Tr key={list}>
                {amountOfColumnsInAList.map((column, index) => (
                  <Td key={index}>{column}</Td>
                ))}
              </Tr>
            ))}
            {/* Add more rows here */}
          </Tbody>
        </Table>
      </TableContainer>
      <ApplicationListPages />
    </Box>
  );
};

export default ApplicationLists;
