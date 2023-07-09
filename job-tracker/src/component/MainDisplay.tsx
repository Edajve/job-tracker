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
import helpers from "../helpers/helpers";


interface Props {
  setFilterButton: (filter: boolean) => void;
  filterValue: (input: string) => void;
  toggleShowAll(): void;
  onDropDown: (value: string) => void;
}

const MainDisplay = ({
  setFilterButton,
  filterValue,
  toggleShowAll,
  onDropDown
}: Props) => {
  const [clickBack, setClickBack] = useState(false);
  const [value, setValue] = useState("");

  const onFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setValue(inputValue);
    filterValue(inputValue);
  };

  const setFilterTrue = () => setFilterButton(true);

  const onShowAll = () => {
    toggleShowAll();
    setValue("");
    filterValue("")
  };

  const onDropDownClick = (name: string) => {
    //run method to change name from UI version to matching the db name
    helpers.transformToDBColumnName(name)
    onDropDown(name)
  }

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
                value={value}
              />
            </Stack>
            <Button onClick={setFilterTrue}>Filter</Button>
            <Button onClick={onShowAll}>Show All / Refresh</Button>
          </HStack>
          <MenuList >
            <MenuItem onClick={() => onDropDownClick("Date")}>Date</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Salary")}>Salary</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Date Applied To")}>Date Applied To</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Company Name")}>Company Name</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Position")}>Position</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Full-Time")}>Full-Time</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Part-Time")}>Part-Time</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Salary")}>Salary</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Company WebSite")}>Company WebSite</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Contact-Into")}>Contact-Into</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Call Back Date")}>Call Back Date</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Tech Stack")}>Tech Stack</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Round 1")}>Round 1</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Round ")}>Round 2</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Final")}>Final</MenuItem>
            <MenuItem onClick={() => onDropDownClick("Notes")}>Notes</MenuItem>
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
