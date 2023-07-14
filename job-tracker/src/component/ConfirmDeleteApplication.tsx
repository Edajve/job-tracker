import { Box, Text, Button } from "@chakra-ui/react";

interface Props {
  setDeleteFlag: (bool: boolean) => void;
}

const ConfirmDeleteApplication = ({ setDeleteFlag }: Props) => {
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
      width="200px"
      height="130px"
      border="2px solid gray"
      borderRadius={10}>
      <Text>You sure you want to delete this?</Text>
      <Button margin={2} color="green" onClick={(item) => handleClick(item)}>
        Yes
      </Button>
      <Button color="red" onClick={(item) => handleClick(item)}>
        No
      </Button>
    </Box>
  );
};

export default ConfirmDeleteApplication;
