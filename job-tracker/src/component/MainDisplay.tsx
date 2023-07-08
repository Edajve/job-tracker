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

interface Props {
  setFilterButton: (filter: boolean) => void;
  filterValue: (input: string) => void;
}

const MainDisplay = ({ setFilterButton, filterValue}: Props) => {
  const [clickBack, setClickBack] = useState(false);

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    filterValue(inputValue);
  };

  const setFilterTrue = () => setFilterButton(true);

  return (
    <Flex flexFlow="column" padding={5}>
      <Box height="120px">
        {/* Dropdown */}
        <Menu>
          <HStack marginTop="2rem">
            <Button onClick={() => setClickBack(!clickBack)}>
              <ArrowLeftIcon />
            </Button>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Ascend By:
            </MenuButton>
            <Stack spacing={3}>
              <Input
                width="25rem"
                variant="flushed"
                placeholder="Search for Company Name"
                onChange={onFilter}
              />
            </Stack>
            <Button onClick={setFilterTrue}>Filter</Button>
            <Button>Show All</Button>
          </HStack>
          <MenuList>
            <MenuItem>Date</MenuItem>
            <MenuItem>Salary</MenuItem>
            <MenuItem>Date Applied To</MenuItem>
            <MenuItem>Company Name</MenuItem>
            <MenuItem>Position</MenuItem>
            <MenuItem>Full-Time</MenuItem>
            <MenuItem>Part-Time</MenuItem>
            <MenuItem>Salary</MenuItem>
            <MenuItem>Company WebSite</MenuItem>
            <MenuItem>Contact-Into</MenuItem>
            <MenuItem>Call Back Date</MenuItem>
            <MenuItem>Tech Stack</MenuItem>
            <MenuItem>Round 1</MenuItem>
            <MenuItem>Round 2</MenuItem>
            <MenuItem>Final</MenuItem>
            <MenuItem>Notes</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box height="97vh" border="2px solid gray" borderRadius="10px">
        {/* Applications UI */}
        <ApplicationLists backButtonState={clickBack} />
      </Box>
    </Flex>
  );
};

export default MainDisplay;
