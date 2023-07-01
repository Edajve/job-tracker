import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Stack,
  Input,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import ApplicationLists from "./ApplicationLists";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ExcelShape } from "../App";


const MainDisplay = () => {
  const [clickBack, setClickBack] = useState(false);

  return (
    <Flex flexFlow="column" padding={5}>
      <Box height="120px">
        <Menu>
          <HStack marginTop="2rem">
            <Button onClick={() => setClickBack(!clickBack)}>
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
      <Box height="97vh" border="2px solid gray" borderRadius="10px">
        <ApplicationLists  backButtonState={clickBack} />
      </Box>
    </Flex>
  );
};

export default MainDisplay;
