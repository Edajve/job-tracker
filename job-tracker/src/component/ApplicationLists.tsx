import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import ApplicationListPages from "./ApplicationListPages";
import { useEffect, useState } from "react";
import SingleAppDisplay from "./SingleAppDisplay";

interface Props {
  headers: (data: any) => void;
}

const ApplicationLists = ({ headers }: Props) => {
  const [allExcelData, setAllExcelData] = useState<undefined | any[]>([]);
  const [rowData, setRowData] = useState<undefined | any[]>([]);
  const [choosenApp, setChoosenApp] = useState<null | any>(null);

  const extractRowData = (array: any) => {
    const returningArray = [];
    for (var i = 1; i < array.length; i++) {
      returningArray.push(array[i]);
    }
    return returningArray;
  };

  useEffect(() => {
    if (headers === undefined) return;
    var retrievedFromLocal = localStorage.getItem("excelDataInLocal");

    if (retrievedFromLocal !== null) {
      const jsonBackToObject = JSON.parse(retrievedFromLocal);
      const headerData = extractRowData(jsonBackToObject);
      setRowData(headerData);
      setAllExcelData(jsonBackToObject);
    }

    //remove data in local storage
    localStorage.removeItem("excelDataInLocal");
  }, [headers]);

  const headerToArray = (): any[] => {
    var header = [];
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        header.push(value);
      }
    }
    return header;
  };

  const shortenVerbage = (text: string): string => {
    if (!text) return text;
    return text.substring(0, 70) + "...";
  };

  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";

  const handleClick = (item: number): void => {
    //you have to plus one for the onclick because the first application starts at 0
    //but in excel data index 0 is the header
    setChoosenApp(allExcelData?.[item + 1]);
  };

  return (
    <Box height="300px">
      <TableContainer>
        {!choosenApp ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                {headerToArray().map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {rowData?.map((row, index) => (
                <Tr
                  _hover={{ background: hoverColor }}
                  cursor="pointer"
                  key={index}
                  onClick={() => handleClick(index)}>
                  <Td>{row.Site}</Td>
                  <Td>{row.Date}</Td>
                  <Td>{row.Date_applied_to}</Td>
                  <Td>{row.Company_name}</Td>
                  <Td>{row.Position}</Td>
                  <Td>{row.Fulltime_Contract}</Td>
                  <Td>{row.Salary}</Td>
                  <Td>
                    <a href={row.Company_Website}>{row.Company_Website}</a>
                  </Td>
                  <Td>{row.Contact_info}</Td>
                  <Td>{row.Call_back_date}</Td>
                  <Td>{shortenVerbage(row.Tech_Stack)}</Td>
                  <Td>{shortenVerbage(row.Round_1)}</Td>
                  <Td>{shortenVerbage(row.Round_2)}</Td>
                  <Td>{shortenVerbage(row.Round_3)}</Td>
                  <Td>{shortenVerbage(row.Final)}</Td>
                  <Td>{shortenVerbage(row.Notes)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <SingleAppDisplay singleApplication={choosenApp} />
        )}
      </TableContainer>
      {rowData?.length !== 0 && !choosenApp ? <ApplicationListPages /> : null}
    </Box>
  );
};

export default ApplicationLists;
