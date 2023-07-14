import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  setApplicationStatus: (status: boolean) => void;
  indexOfApplicationClicked: string;
  canDeleteApplication: boolean;
}

const Aside = ({
  setApplicationStatus,
  indexOfApplicationClicked,
  canDeleteApplication,
}: Props) => {
  const [indexOfApplication, setIndexOfApplication] = useState("");
  const [ableToDelete, setAbleToDelete] = useState(false);

  useEffect(() => {
    setIndexOfApplication(indexOfApplicationClicked);
    setAbleToDelete(canDeleteApplication);
  }, [canDeleteApplication, indexOfApplication]);

  const handleDelete = () => {
    setAbleToDelete(canDeleteApplication);
    useEffect(() => {});
  };

  return (
    <List spacing={4} paddingTop={12}>
      <ListItem>
        <Button onClick={() => setApplicationStatus(true)}>
          <ListIcon as={AddIcon} color="green.500" />
          Add Application
        </Button>
      </ListItem>
      <ListItem>
        <Button isDisabled={!ableToDelete} onClick={handleDelete}>
          <ListIcon as={DeleteIcon} color="green.500" />
          Delete Application
        </Button>
      </ListItem>
    </List>
  );
};

export default Aside;
