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

interface Props {
  headers: (data: any) => void;
}

const ApplicationLists = ({ headers }: Props) => {
  const amountOfHeaders = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const amountOfRowsInAList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const amountOfColumnsInAList = amountOfHeaders;

  const headerToArray = () => {
    var header = [];
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        header.push(value);
      }
    }
    return header;
  };

  return (
    <Box height="300px">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {headerToArray().map((header, index) => (
                <Th key={index}>{header}</Th>
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
