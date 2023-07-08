import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApplicationEditor from "./ApplicationEditor";
import { ExcelShape } from "../App";
import helpers from "../helpers/helpers";

interface Props {
  singleApplication: ExcelShape;
}

const SingleAppDisplay = ({ singleApplication }: Props) => {
  const [application, setApplication] = useState<ExcelShape>({} as ExcelShape);
  const [applicationID, setApplicationID] = useState<string | null>();
  const [editButton, setEditButton] = useState(false);

  useEffect(() => {
    setApplication(singleApplication);
    setApplicationID(singleApplication.id);
  }, [application]);

  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "light" ? "#e8eced" : "#3e3d47";

  const boxStyles = {
    overflow: "hidden",
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: hoverColor,
    },
  };

  const detailClicked = (
    item: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setEditButton(true);
  };

  if (singleApplication === null || singleApplication === undefined) return;

  return (
    <>
      {!editButton ? (
        <Card>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {Object.entries(application).map(([key, value]) => (
                <Box sx={boxStyles} onClick={(item) => detailClicked(item)}>
                  <Heading size="xs" textTransform="uppercase">
                    {key}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {value}
                  </Text>
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>
      ) : (
        <ApplicationEditor handleGoingBack={() => setEditButton(!editButton)} />
      )}
    </>
  );
};

export default SingleAppDisplay;
