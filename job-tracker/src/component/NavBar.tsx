import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import FileDownload from "./FileDownload";
import { Divider } from "@chakra-ui/react";

interface Props {
  fromNavToApp: (data: string | ArrayBuffer) => void;
}

const NavBar = ({ fromNavToApp }: Props) => {

  return (
    <>
      <HStack
        justifyContent="space-evenly"
        width="100vw"
        padding={4}
        marginY={5}>
        <FileDownload fromFileToNav={(data) => fromNavToApp(data)} />
        <Spacer />
        <ColorModeSwitch />
      </HStack>
      <Divider borderColor="gray.100" />
    </>
  );
};

export default NavBar;
