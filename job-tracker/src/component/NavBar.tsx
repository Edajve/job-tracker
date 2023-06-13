import { useState } from "react";
import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import FileDownload from "./FileDownload";
import { Divider } from "@chakra-ui/react";

const NavBar = () => {
  const [excelJson, setExcelJson] = useState({})
  return (
    <>
    <HStack justifyContent="space-evenly" width="100vw" padding={4} marginY={5}>
      <FileDownload />
      <Spacer />
      <ColorModeSwitch />
    </HStack>
    <Divider borderColor="gray.100" />
    </>
  );
};

export default NavBar;
