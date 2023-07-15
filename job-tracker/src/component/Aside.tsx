import {
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { Button, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ConfirmDeleteApplication from "./ConfirmDeleteApplication";
import apiClient from "../services/http-client";

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
  const [disableButton, setDisableButton] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [sureToDelete, setSureToDelete] = useState<null | boolean>(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setIndexOfApplication(indexOfApplicationClicked);
    setDisableButton(canDeleteApplication);
  }, [canDeleteApplication, indexOfApplication]);

  useEffect(() => {
    if (sureToDelete === null) return;

    if (sureToDelete) {
      apiClient
        .delete(`/api/v1/applications/${indexOfApplication}`)
        .then(() => {
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 2500);
        })
        .catch((error) => {
          setErrorMessage(true);
          setTimeout(() => {
            setErrorMessage(false);
          }, 2500);
          throw new Error(error);
        });
    }
    setSureToDelete(null);
    setDisableButton(false);
    setDeleteBtn(false);
  }, [deleteBtn, sureToDelete]);

  const handleDelete = () => {
    setDisableButton(canDeleteApplication);
    setDeleteBtn(true);
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
        <Button isDisabled={!disableButton} onClick={handleDelete}>
          <ListIcon as={DeleteIcon} color="green.500" />
          Delete Application
        </Button>
      </ListItem>
      {deleteBtn && (
        <ListItem>
          <ConfirmDeleteApplication
            setDeleteFlag={(bool) => setSureToDelete(bool)}
          />
        </ListItem>
      )}
      {successMessage && <p>Application Deleted Refresh for new changes</p>}
      {errorMessage && <p>Changes Not Saved</p>}
    </List>
  );
};

export default Aside;
