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
  rowData: ExcelShape[];
  choosenApplication: null | any;
}

const ApplicationLists = ({ backButtonState }: Props) => {
  const [state, setState] = useState<State>({
    allExcelData: [],
    rowData: [],
    choosenApplication: null,
  });
  const excelContext = useContext(ExcelContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      choosenApplication: null,
    }));
  }, [backButtonState]);

  const objectToArray = (headerArray: ExcelShape): string[] => {
    var header = [];
    if (headerArray !== undefined && headerArray !== null) {
      for (const [value] of Object.entries(headerArray)) {
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
    setState((prevState) => ({
      ...prevState,
      choosenApplication: excelContext[item + 1],
    }));
  };

  return (
    <Box height="300px">
      <TableContainer>
        {!state.choosenApplication ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                {objectToArray(excelContext[0]).map((row, index) => (
                  <Th key={index}>{row}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {excelContext.slice(1).map((row, index) => (
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
          <SingleAppDisplay singleApplication={state.choosenApplication} />
        )}
      </TableContainer>
      {state.rowData?.length !== 0 && !state.choosenApplication ? (
        <ApplicationListPages />
      ) : null}
    </Box>
  );
};

export default ApplicationLists;
