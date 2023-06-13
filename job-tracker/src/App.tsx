import { Grid, GridItem } from "@chakra-ui/layout";
import { Divider, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/NavBar";
import MainDisplay from "./component/MainDisplay";

function App() {
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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" height="100vh" marginTop="2px">
        <Divider borderColor="gray.200" />
        <MainDisplay />
      </GridItem>
    </Grid>
  );
}

export default App;
