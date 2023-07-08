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
import shortenVerbage from "../helpers/helpers"

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

  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";

  const handleClick = (item: number): void => {
    setState((prevState) => ({
      ...prevState,
      choosenApplication: excelContext[item],
    }));
  };

  return (
    <Box height="300px">
      <TableContainer>
        {!state.choosenApplication ? (
          <Table variant="simple">
            <Thead>
              <Tr>
                {
                objectToArray(excelContext[0]).map((row, index) =>(

                  <Th key={index}>{row}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {excelContext.map((row, index) => (
                <Tr
                  _hover={{ background: hoverColor }}
                  cursor="pointer"
                  key={index}
                  onClick={() => handleClick(index)}>
                  <Td>{row.id}</Td>
                  <Td>{row.site}</Td>
                  <Td>{shortenVerbage(row.date, 10, false)}</Td>
                  <Td>{shortenVerbage(row.date_applied_to, 10, false)}</Td>
                  <Td>{row.company_name}</Td>
                  <Td>{row.position}</Td>
                  <Td>{row.fulltime_Contract}</Td>
                  <Td>{row.salary}</Td>
                  <Td>
                    <a href={row.company_Website}>{row.company_Website}</a>
                  </Td>
                  <Td>{row.contact_info}</Td>
                  <Td>{row.call_back_date}</Td>
                  <Td>{shortenVerbage(row.tech_Stack, 70)}</Td>
                  <Td>{shortenVerbage(row.round_1, 70)}</Td>
                  <Td>{shortenVerbage(row.round_2, 70)}</Td>
                  <Td>{shortenVerbage(row.round_3, 70)}</Td>
                  <Td>{shortenVerbage(row.final, 70)}</Td>
                  <Td>{shortenVerbage(row.notes, 70)}</Td>
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
