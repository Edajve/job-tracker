import { Grid, GridItem } from "@chakra-ui/layout";
import { Divider, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";
import ListActions from "./component/ListActions";
import { useEffect, useState } from "react";
import { ExcelResponse } from "./hooks/useExcel";

function App() {
  const [excel, setExcel] = useState<ExcelResponse | null>(null);

  useEffect(() => {
    if (excel !== null) {
      console.log("current state of app", excel);
    }
  }, [excel] || []);

  function liftUpExcel(data: any): void {
    if (data !== null) {
      console.log("state coming from nav bar to app", data);
      setExcel(data);
    }
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //lg = larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}>
      <GridItem as="nav" height="100px">
        <NavBar liftUpExcel={(data) => liftUpExcel(data)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ListActions />
        </GridItem>
      </Show>
      <GridItem area="main" height="100vh" marginTop="2px">
        <Divider borderColor="gray.200" />
        <MainDisplay updateExcel={excel} />
      </GridItem>
    </Grid>
  );
}

export default App;
