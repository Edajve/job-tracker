import { Box, Button, Card, CardBody, CardHeader, Heading, SimpleGrid, Stack, StackDivider, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApplicationEditor from "./ApplicationEditor";
import { ExcelShape } from "../App";
import helpers from "../helpers/helpers";

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

  if (singleApplication === null || singleApplication === undefined) return;

  return (
    <>
      {!editButton ? (
        <Card>
        <CardHeader>
          <Heading size='md'>Client Report</Heading>
        </CardHeader>
      
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
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
