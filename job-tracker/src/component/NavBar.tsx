import { useState, useEffect } from "react";
import { HStack, Spacer } from "@chakra-ui/layout";
import ColorModeSwitch from "./ColorModeSwitch";
import FileDownload from "./FileDownload";
import { Divider } from "@chakra-ui/react";
import { ExcelResponse } from "../hooks/useExcel";

interface Props {
  liftUpExcel: (data: ExcelResponse) => void;
}

const NavBar = ({ liftUpExcel }: Props) => {
  const [excel, setExcel] = useState<ExcelResponse | null>(null);

  const passUpExcel = (data: ExcelResponse) => {
    if (data !== null) {
      setExcel(data);
    }
  };

  useEffect(() => {
    if (excel !== null) {
      console.log("lifted up state from <NavBar />: ", excel)
      liftUpExcel(excel)
    }
  }, [excel]);

  return (
    <>
      <HStack
        justifyContent="space-evenly"
        width="100vw"
        padding={4}
        marginY={5}>
        <FileDownload passUpExcel={(data) => passUpExcel(data)} />
        <Spacer />
        <ColorModeSwitch />
      </HStack>
      <Divider borderColor="gray.100" />
    </>
  );
};

export default NavBar;
