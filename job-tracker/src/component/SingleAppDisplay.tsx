import { Box, Button, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApplicationEditor from "./ApplicationEditor";
import { ExcelShape } from "../App";
import shortenVerbage from "../helpers/helpers";

interface Props {
  singleApplication(singleApp: ExcelShape): ExcelShape;
}

const SingleAppDisplay = ({ singleApplication }: Props) => {
  const [application, setApplication] = useState<ExcelShape>({} as ExcelShape);
  const [editButton, setEditButton] = useState(false);

  useEffect(() => {
    setApplication(singleApplication);
  }, [application]);

  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";

  const titleStyles = {
    fontSize: "3xl",
  };

  const descriptionStyles = {
    color: "orange.200",
    overflowWrap: "break-word",
  };

  const boxStyles = {
    borderRadius: "10px",
    border: "1px solid gray",
    padding: ".5rem",
    paddingTop: ".5rem",
    overflow: "hidden",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: hoverColor,
    },
  };

  const buttonStyles = {
    marginTop: "4.5rem",
    marginLeft: "14rem",
  };

  const handleEditClick = () => {
    setEditButton(true);
  };

  if (singleApplication === null || singleApplication === undefined) return;

  return (
    <>
      {!editButton ? (
        <SimpleGrid column={8} minChildWidth="300px" height="50rem">
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Site:
            </Text>
            <Text sx={descriptionStyles}>{application?.site}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Date:
            </Text>
            <Text sx={descriptionStyles}>{shortenVerbage(application?.date, 10, false)}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Date Applied To:
            </Text>
            <Text sx={descriptionStyles}>{shortenVerbage(application?.date_applied_to, 10, false)}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Company Name:
            </Text>
            <Text sx={descriptionStyles}>{application?.company_name}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Position:
            </Text>
            <Text sx={descriptionStyles}>{application?.position}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Fulltime/Contract:
            </Text>
            <Text sx={descriptionStyles}>{application?.fulltime_Contract}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Salary:
            </Text>
            <Text sx={descriptionStyles}>{application?.salary}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Company Website:
            </Text>
            <Text sx={descriptionStyles}>{application?.company_Website}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Contact information:
            </Text>
            <Text sx={descriptionStyles}>{application?.contact_info}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Call Back Date:
            </Text>
            <Text sx={descriptionStyles}>{application?.call_back_date}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Tech Stack:
            </Text>
            <Text sx={descriptionStyles}>{application?.tech_Stack}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Round 1:
            </Text>
            <Text sx={descriptionStyles}>{application?.round_1}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Round 2:
            </Text>
            <Text sx={descriptionStyles}>{application?.round_2}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Round 3:
            </Text>
            <Text sx={descriptionStyles}>{application?.round_3}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Final:
            </Text>
            <Text sx={descriptionStyles}>{application?.final}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
          <Box sx={boxStyles} bg="grey.300" height="200px">
            <Text sx={titleStyles} as="b" fontSize="2xl">
              Notes:
            </Text>
            <Text sx={descriptionStyles}>{application?.notes}</Text>
            <Button
              onClick={() => handleEditClick()}
              sx={buttonStyles}
              colorScheme="gray"
              variant="outline">
              Edit
            </Button>
          </Box>
        </SimpleGrid>
      ) : (
        <ApplicationEditor handleGoingBack={() => setEditButton(!editButton)} />
      )}
    </>
  );
};

export default SingleAppDisplay;
