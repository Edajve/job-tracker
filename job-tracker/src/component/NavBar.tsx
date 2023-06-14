import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import FileDownload from "./FileDownload";
import { Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  fromNavToApp: (data: any) => void;
}

const NavBar = ({ fromNavToApp }: Props) => {
  const [excelData, setExcelData] = useState<null | unknown>(null);

  useEffect(() => {
    fromNavToApp(excelData);
  }, [excelData]);

  const recieveState = (data: any) => {
    setExcelData(data);
  };

  return (
    <>
      <HStack
        justifyContent="space-evenly"
        width="100vw"
        padding={4}
        marginY={5}>
        <FileDownload fromFileToNav={(data) => recieveState(data)} />
        <Spacer />
        <ColorModeSwitch />
      </HStack>
      <Divider borderColor="gray.100" />
    </>
  );
};

export default NavBar;
