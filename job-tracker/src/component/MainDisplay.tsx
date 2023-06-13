import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Stack, Input } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import ApplicationLists from "./ApplicationLists";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { ExcelResponse } from "../hooks/useExcel";

interface Props {
  updateExcel: ExcelResponse | null;
}

const MainDisplay = ({ updateExcel }: Props) => {
  const [excel, setExcel] = useState<ExcelResponse | null>(null);

  useEffect(() => {
    if (updateExcel !== null) {
      console.log("Current state of (updatedExcel) MainDisplay:", updateExcel);
      setExcel(updateExcel);
    }
  }, [updateExcel]);

  useEffect(() => {
    if (updateExcel !== null) {
     console.log(excel)
    }
  }, [excel]);

  return (
    <Flex flexFlow="column" padding={5}>
      <Box height="100px">
        <Menu>
          <HStack marginTop="2rem">
            <Button>
              <ArrowLeftIcon />
            </Button>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Order By: Relevance
            </MenuButton>
            <Stack spacing={3}>
              <Input variant="flushed" placeholder="Search" />
            </Stack>
          </HStack>
          <MenuList>
            <MenuItem>Date</MenuItem>
            <MenuItem>Salary</MenuItem>
            <MenuItem>Contract-to-Hire</MenuItem>
            <MenuItem>Full-Time</MenuItem>
            <MenuItem>Contract</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box height="70vh" border="2px solid gray" borderRadius="10px">
        {/* Use the 'excel' state instead of 'passDownExcel' */}
        <ApplicationLists passDownExcel={excel} />
      </Box>
    </Flex>
  );
};

export default MainDisplay;
