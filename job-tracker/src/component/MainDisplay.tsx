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
import { useEffect, useState } from "react";

interface Props {
  appToMain: any;
}

const MainDisplay = ({ appToMain }: Props) => {
  const [excel, setExcel] = useState<null | undefined>(null);

  useEffect(() => {
    setExcel(appToMain);
  }, [excel]);

  const passHeader = () => {
    if (appToMain) {
      return appToMain[0];
    }
  };

  return (
    <Flex flexFlow="column" padding={5}>
      <Box height="120px">
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
      <Box height="97vh" border="2px solid gray" borderRadius="10px">
        <ApplicationLists headers={passHeader()} />
      </Box>
    </Flex>
  );
};

export default MainDisplay;
