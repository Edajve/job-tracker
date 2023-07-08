import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import SiteHeader from "./SiteHeader";
import { Divider } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <HStack
        justifyContent="space-evenly"
        width="100vw"
        padding={4}
        marginY={5}>
        <SiteHeader />
        <Spacer />
        <ColorModeSwitch />
      </HStack>
      <Divider borderColor="gray.100" />
    </>
  );
};

export default NavBar;
