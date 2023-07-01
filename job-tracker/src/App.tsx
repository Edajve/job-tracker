import "./App.css";
import { useState, createContext } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Divider, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";
import ListActions from "./component/ListActions";
import readDataFromExcel from './hooks/useExcel';

export interface ExcelShape {
  Site: string;
  Date: string;
  Date_applied_to: string;
  Company_name: string;
  Position: string;
  Fulltime_Contract: string;
  Salary: string;
  Company_Website: string;
  Contact_info: string;
  Call_back_date: string;
  Tech_Stack: string;
  Round_1: string;
  Round_2: string;
  Round_3: string;
  Final: string;
  Notes: string;
}

export const ExcelContext = createContext([] as ExcelShape[])

function App() {
  const [excelData, setExcelData] = useState<ExcelShape[]>([] as ExcelShape[]);

  const recieveExcelFileBuffer = (data: string | ArrayBuffer) => {
    const excel = readDataFromExcel(data) as ExcelShape[];
    setExcelData(excel)
  };

  return (
    <ExcelContext.Provider value={excelData}>
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //lg = larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 2fr",
      }}>
      <GridItem as="nav" height="100px">
        <NavBar fromNavToApp={(fileBuffer) => recieveExcelFileBuffer(fileBuffer)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ListActions />
        </GridItem>
      </Show>
      <GridItem overflow="hidden" area="main" height="140vh" marginTop="2px">
        <Divider borderColor="gray.200" />
        <MainDisplay />
      </GridItem>
    </Grid>
    </ExcelContext.Provider>
  );
}

export default App;
