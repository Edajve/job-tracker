import { useState, createContext, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Divider, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";
import Aside from "./component/Aside";
import apiClient from "./services/http-client";
import ApplicationShape from "./types/Excel";
import CreateApplication from "./component/CreateApplication";

export const ExcelContext = createContext([] as ApplicationShape[]);

function App() {
  const [excelData, setExcelData] = useState([] as ApplicationShape[]);
  const [filterClick, setFilterClick] = useState<boolean>(false);
  const [filterVal, setFilterVal] = useState("");
  const [showAllToggle, setShowAllToggle] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");
  const [addApplication, setAddApplication] = useState(false);
  const [singleApplication, setSingleApplication] = useState("");
  const [keepIndex, setKeepIndex] = useState(false);

  //initial render API (get all applications)
  useEffect(() => {
    apiClient
      .get("/api/v1/applications")
      .then((response) => setExcelData(response.data.data))
      .catch((error) => new Error(error));
  }, []);

  //search by company name API
  useEffect(() => {
    if (filterClick && filterVal.length > 0) {
      apiClient
        .get(`/api/v1/applications/query?company_name=${filterVal}`)
        .then((response) => setExcelData(response.data.data))
        .catch((error) => console.log(error));
    }
    setFilterClick(false);
  }, [filterClick, filterVal]);

  //on show all button API
  useEffect(() => {
    apiClient
      .get("/api/v1/applications")
      .then((response) => setExcelData(response.data.data))
      .catch((error) => new Error(error));
  }, [showAllToggle]);

  //ascend by column API
  useEffect(() => {
    if (!dropDownValue) return;
    apiClient
      .get(`api/v1/applications/dynamic/query?&column=${dropDownValue}`)
      .then((response) => setExcelData(response.data.data))
      .catch((error) => new Error(error));
  }, [dropDownValue]);

  const onShowAllClick = () => setShowAllToggle(!showAllToggle);
  const updateSearchInput = (value: string) => setFilterVal(value);
  const setAppPageToTrue = () => setAddApplication(true);

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
        {/* Nav */}
        <GridItem as="nav" height="100px">
          <NavBar />
        </GridItem>
        {/* Aside */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Aside
              canDeleteApplication={keepIndex}
              indexOfApplicationClicked={singleApplication}
              setApplicationStatus={setAppPageToTrue}
            />
          </GridItem>
        </Show>
        {/* Main */}
        <GridItem overflow="hidden" area="main" height="300vh" marginTop="-4px">
          <Divider borderColor="gray.200" />
          {addApplication ? (
            <CreateApplication setApplicationStatus={setAddApplication} />
          ) : (
            <MainDisplay
              canDeleteApp={(bool) => setKeepIndex(bool)}
              clearClickedOnApplication={(bool) => setKeepIndex(bool)}
              idOfApplicationClicked={(index) => setSingleApplication(index)}
              onDropDown={(value) => setDropDownValue(value)}
              toggleShowAll={onShowAllClick}
              filterValue={(data) => updateSearchInput(data)}
              setFilterButton={setFilterClick}
            />
          )}
        </GridItem>
      </Grid>
    </ExcelContext.Provider>
  );
}

export default App;
