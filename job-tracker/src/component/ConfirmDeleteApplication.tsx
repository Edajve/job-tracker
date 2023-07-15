import { Box, Text, Button } from "@chakra-ui/react";

interface Props {
  setDeleteFlag: (bool: boolean) => void;
  indexOfApplicationBeingDeleted: string;
}

const ConfirmDeleteApplication = ({ setDeleteFlag, indexOfApplicationBeingDeleted }: Props) => {
  const handleClick = (
    yesOrNo: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (yesOrNo === undefined) return;
    yesOrNo.currentTarget.textContent?.toLowerCase() === "yes"
      ? setDeleteFlag(true)
      : setDeleteFlag(false);
  };

  return (
    <Box
      padding={4}
      width="230px"
      height="150px"
      border="2px solid gray"
      borderRadius={10}>
      <Text>You sure you want to delete application id: {indexOfApplicationBeingDeleted}?</Text>
      <Box mt={3}>
        <Button margin={2} marginLeft='30px' color="green" onClick={(item) => handleClick(item)}>
          Yes
        </Button>
        <Button color="red" onClick={(item) => handleClick(item)}>
          No
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmDeleteApplication;
