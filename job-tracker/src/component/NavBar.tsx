import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import FileDownload from "./FileDownload";

const NavBar = () => {
  return (
    <HStack justifyContent="space-evenly" width="100vw" padding={4} marginY={3}>
      <FileDownload />
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
