import { Box, Button, Card, CardBody, CardHeader, Heading, SimpleGrid, Stack, StackDivider, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApplicationEditor from "./ApplicationEditor";
import { ExcelShape } from "../App";
import helpers from "../helpers/helpers";

interface Props {
  singleApplication: ExcelShape;
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

  const detailsToArray = helpers.objectToArray(application)
  console.log(application)

  return (
    <>
      {!editButton ? (
        <Card>
        <CardHeader>
        <Text marginBottom={5} fontSize='sm'>
                ID: {application.id}
              </Text>
          <Heading size='lg'>{application.company_name}</Heading>
          <Text pt='2' fontSize='sm'>
                Though Site: {application.site}
              </Text>
        </CardHeader>
    
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Position
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.position}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Salary
              </Heading>
              <Text pt='2' fontSize='sm'>
                ${application.salary}/hr
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Date
              </Heading>
              <Text pt='2' fontSize='sm'>
                {helpers.shortenVerbage(application.date, 10, false)}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Date Applied
              </Heading>
              <Text pt='2' fontSize='sm'>
                {helpers.shortenVerbage(application.date_applied_to, 10, false)}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Fulltime/Contract
              </Heading>
              <Text pt='2' fontSize='sm'>
                {Boolean(application.fulltime_Contract)}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Company Website
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.company_website}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                 Contact Info
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.contact_info}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Call Back Date
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.call_back_date}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Tech Stack
              </Heading>
              <Text pt='2' fontSize='sm'>
               {application.tech_stack}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Round 1
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.round_1}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Round 2
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.round_2}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Round 3
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.round_3}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Final
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.final}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Notes
              </Heading>
              <Text pt='2' fontSize='sm'>
                {application.notes}
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
