import { HStack, Button } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const ApplicationListPages = () => {
  return (
    <HStack height="60px" justifyContent="center">
      <Button><ArrowLeftIcon /></Button>
      <Button><ArrowRightIcon /></Button>
    </HStack>
  );
};

export default ApplicationListPages;
