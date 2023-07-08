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
import { ExcelContext } from "../App";
import helpers from "../helpers/helpers";

interface Props {
  backButtonState: boolean;
}

// interface Pages {
//   addApplication: boolean;
//   deleteApplication: boolean;
// }

const ApplicationLists = ({ backButtonState }: Props) => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";
  const [indexOfApplication, setIndexOfApplication] = useState<null | string>(null);
  // i know this is is horribly implemented, i need to learn react router, but i feel
  // implementing react router at this point will take a lot of refactoring so i'll
  // implement it after i learn it fully
  //const [pages, setPages] = useState()

  const excelContext = useContext(ExcelContext);

  useEffect(() => {
    setIndexOfApplication(null);
  }, [backButtonState]);

  const handleClick = (idOfSingleApplication: string): void => {
    setIndexOfApplication(idOfSingleApplication);
  };

  return (
    <Box height="300px">
      <TableContainer>
        {!indexOfApplication ? (
          <Table variant="simple">
            {/* Table Header */}
            <Thead>
              <Tr>
                {helpers
                  .objectToArray(excelContext[0], true)
                  .map((row, index) => (
                    <Th key={index}>{row}</Th>
                  ))}
              </Tr>
            </Thead>
            {/* Table Body */}
            <Tbody>
              {excelContext.map((row, index) => (
                <Tr
                  _hover={{ background: hoverColor }}
                  cursor="pointer"
                  key={index}
                  onClick={() => handleClick(row.id)}>
                  <Td>{row.id}</Td>
                  <Td>{row.site}</Td>
                  <Td>{helpers.shortenVerbage(row.date, 10, false)}</Td>
                  <Td>
                    {helpers.shortenVerbage(row.date_applied_to, 10, false)}
                  </Td>
                  <Td>{row.company_name}</Td>
                  <Td>{row.position}</Td>
                  <Td>{row.fulltime_Contract}</Td>
                  <Td>{row.salary}</Td>
                  <Td>
                    <a href={row.company_website}>{row.company_website}</a>
                  </Td>
                  <Td>{row.contact_info}</Td>
                  <Td>{row.call_back_date}</Td>
                  <Td>{helpers.shortenVerbage(row.tech_stack, 70)}</Td>
                  <Td>{helpers.shortenVerbage(row.round_1, 70)}</Td>
                  <Td>{helpers.shortenVerbage(row.round_2, 70)}</Td>
                  <Td>{helpers.shortenVerbage(row.round_3, 70)}</Td>
                  <Td>{helpers.shortenVerbage(row.final, 70)}</Td>
                  <Td>{helpers.shortenVerbage(row.notes, 70)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <SingleAppDisplay idOfChoosenApp={indexOfApplication} />
        )}
      </TableContainer>
      {!indexOfApplication ? (
        // The left and right pages used for pagination
        <ApplicationListPages />
      ) : null}
    </Box>
  );
};

export default ApplicationLists;
