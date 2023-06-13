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

const MainDisplay = () => {
  return (
    <Flex flexFlow="column" padding={5} background="gray.600">
      <Box height="100px">
        <Menu>
          <HStack marginTop="1rem">
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
        <ApplicationLists />
      </Box>
    </Flex>
  );
};

export default MainDisplay;
