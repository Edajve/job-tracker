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
import { useEffect, useState, useContext } from "react";
import SingleAppDisplay from "./SingleAppDisplay";
import { ExcelContext, ExcelShape } from "../App";

interface Props {
  backButtonState: boolean;
}

interface State {
  allExcelData: ExcelShape[];
  rowData: any[];
  choosenApp: null | any;
}

const ApplicationLists = ({ backButtonState }: Props) => {
  const [state, setState] = useState<State>({
    allExcelData: [],
    rowData: [],
    choosenApp: null,
  });
  const excelContext = useContext(ExcelContext)

  const extractRowData = (array: any) => {
    const returningArray = [];
    for (var i = 1; i < array.length; i++) {
      returningArray.push(array[i]);
    }
    return returningArray;
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, choosenApp: null }));
  }, [backButtonState]);


  // const headerToArray = (): any[] => {
  //   var header = [];
  //   if (headers) {
  //     for (const [ value] of Object.entries(headers)) {
  //       header.push(value);
  //     }
  //   }
  //   return header;
  // };

  const shortenVerbage = (text: string): string => {
    if (!text) return text;
    return text.substring(0, 70) + "...";
  };

  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";

  const handleClick = (item: number): void => {
    //you have to plus one for the onclick because the first application starts at 0
    //but in excel data index 0 is the header
    setState((prevState) => ({
      ...prevState,
      choosenApp: state.allExcelData?.[item + 1],
    }));
  };

  return (
    <Box height="300px">
      <TableContainer>
        {!state.choosenApp ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                {/* {headerToArray().map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))} */}
              </Tr>
            </Thead>
            <Tbody>
              {state.rowData?.map((row, index) => (
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
          <SingleAppDisplay singleApplication={state.choosenApp} />
        )}
      </TableContainer>
      {state.rowData?.length !== 0 && !state.choosenApp ? (
        <ApplicationListPages />
      ) : null}
    </Box>
  );
};

export default ApplicationLists;
