import { Grid, GridItem } from "@chakra-ui/layout";
import "./App.css";
import { Divider, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";
import ListActions from "./component/ListActions";
import { useState } from "react";

function App() {
  const [excelData, setExcelData] = useState<null | undefined>(null);

  const recieveState = (data: any) => {
    setExcelData(data);
  };

  return (
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
        <NavBar fromNavToApp={(data) => recieveState(data)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ListActions />
        </GridItem>
      </Show>
      <GridItem overflow="hidden" area="main" height="140vh" marginTop="2px">
        <Divider borderColor="gray.200" />
        <MainDisplay appToMain={excelData} />
      </GridItem>
    </Grid>
  );
}

export default App;
