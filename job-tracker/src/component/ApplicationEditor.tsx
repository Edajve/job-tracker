import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";

const editButtonStyles = {};

const saveChangesButtonStyles = {
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "green.800",
    cursor: "pointer",
  },
};

interface Props {
  handleGoingBack(bool: boolean): void;
}

const ApplicationEditor = ({ handleGoingBack }: Props) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  let [value, setValue] = useState('')

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Box padding={10}>
      <Heading as="h1" paddingLeft={3} paddingBottom={10}>
        Edit Section
      </Heading>  
      <Textarea
        borderRadius={10}
        value={value}
        size="lg"
        width={{ base: "20rem", md: "40rem", lg: "70%" }}
        height="20rem"
        onChange={handleInputChange}
        placeholder='Edit Section'

      />
      <Box paddingLeft={3} paddingTop={9}>
        <Button
          onClick={() => handleGoingBack(false)}
          sx={editButtonStyles}
          colorScheme="gray"
          variant="outline">
          Back
        </Button>

        <Button
          marginLeft={5}
          onClick={() => setIsLoadingState(true)}
          sx={saveChangesButtonStyles}
          colorScheme="gray"
          variant="outline">
          Save Changes
        </Button>
      </Box>
      {isLoadingState && (
        <List paddingTop={4} paddingLeft={2}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Changes Saved
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="red.400" />
            Changes Not Saved
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default ApplicationEditor;
