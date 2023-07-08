import "./App.css";
import { useState, createContext, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Divider, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";
import ListActions from "./component/ListActions";
import apiClient from "./services/http-client"

export interface ExcelShape {
  id:string
  site: string;
  date: string;
  date_applied_to: string;
  company_name: string;
  position: string;
  fulltime_Contract: string;
  salary: string;
  company_Website: string;
  contact_info: string;
  call_back_date: string;
  tech_Stack: string;
  round_1: string;
  round_2: string;
  round_3: string;
  final: string;
  notes: string;
}

export const ExcelContext = createContext([] as ExcelShape[])

function App() {
  const [excelData, setExcelData] = useState<ExcelShape[]>([] as ExcelShape[]);
  const [filterClick, setFilterClick] = useState<boolean>(false)

  useEffect(() => {
    //call api from here if 'filterClick' is true, then after you make the api call set 
    //state to false
   // PS YOU SHOULD ADD SOME LOGIC THAT DISABLES THE FILTER BUTTON UNTIL THE API CALL IS FINISHED
    setFilterClick(false)
    
  }, [filterClick])

  useEffect(() => {
    apiClient.get('/api/v1/applications')
    .then(response => setExcelData(response.data.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <ExcelContext.Provider value={excelData}>
      <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 2fr",
      }}>
      <GridItem as="nav" height="100px">
        <NavBar  />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ListActions />
        </GridItem>
      </Show>
      <GridItem overflow="hidden" area="main" height="140vh" marginTop="-4px">
        <Divider borderColor="gray.200" />
        <MainDisplay setFilterButton={setFilterClick} />
      </GridItem>
    </Grid>
    </ExcelContext.Provider>
  );
}

export default App;
