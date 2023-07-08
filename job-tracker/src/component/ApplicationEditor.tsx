import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { updateColumnQuery } from "./SingleAppDisplay";
import apiClient from "../services/http-client"

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
  apiQuery: updateColumnQuery;
  setApiQuery: React.Dispatch<React.SetStateAction<updateColumnQuery>>;
}

const ApplicationEditor = ({
  handleGoingBack,
  apiQuery,
  setApiQuery,
}: Props) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const saveChanges = () => {
    setApiQuery((state) => ({
      ...state,
      applicationNewEntry: value,
    }));
    setIsLoadingState(true);
  };

  useEffect(() => {
    if (
      apiQuery.applicationNewEntry !== "" &&
      apiQuery.applicationNewEntry !== undefined
    ) {
      apiClient.put(`/api/v1/applications/${apiQuery.applicationColumn}/${apiQuery.applicationID}`,
       {updatedColumn: apiQuery.applicationNewEntry})
      .then(res => console.log(res))
      .catch(error => console.log(error))
      setTimeout(() => {
        setIsLoadingState(false);
      }, 2000);
    }
  }, [apiQuery.applicationNewEntry]);

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
        placeholder="Edit Section"
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
          onClick={saveChanges}
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
