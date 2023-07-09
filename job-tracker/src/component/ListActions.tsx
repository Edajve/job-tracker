import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, List, ListIcon, ListItem } from "@chakra-ui/react";

interface Props {
  setApplicationStatus:(status: boolean) => void;
}

const ListActions = ({ setApplicationStatus }: Props) => {
  

  
  return (
    <List spacing={4} paddingTop={12}>
      <ListItem>
        <Button onClick={() => setApplicationStatus(true)}>
          <ListIcon
          as={AddIcon}
          color="green.500"
          />
          Add Application
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ListIcon as={DeleteIcon} color="green.500" />
          Delete Application
        </Button>
      </ListItem>
    </List>
  );
};

export default ListActions;
