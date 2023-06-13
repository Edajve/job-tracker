import { AddIcon, CopyIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, List, ListIcon, ListItem } from "@chakra-ui/react";

const ListActions = () => {
  return (
    <List spacing={4} paddingTop={5}>
      <ListItem>
        <Button>
          <ListIcon as={AddIcon} color="green.500" />
          Add Application
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ListIcon as={CopyIcon} color="green.500" />
          Copy New Application
        </Button>
      </ListItem>
      <ListItem>
        <Button>
          <ListIcon as={EditIcon} color="green.500" />
          Edit Application
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
