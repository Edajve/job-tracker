import { Text, Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/NavBar";

function App() {
  return (
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //lg = larger than 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}>
        <GridItem background="blue.200" as="nav" height="80px">
          <NavBar />
        </GridItem>
        <Show above="lg">
        <GridItem background="green.200" area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem background="orange.200" area="main">
        main
      </GridItem>
      </Grid>
  );
}

export default App;
