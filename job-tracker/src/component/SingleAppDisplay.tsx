import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApplicationEditor from "./ApplicationEditor";
import { ExcelShape } from "../App";

interface Props {
  singleApplication: ExcelShape;
}

export interface updateColumnQuery {
  applicationID: string;
  applicationColumn: string;
  applicationNewEntry: string;
}

const SingleAppDisplay = ({ singleApplication }: Props) => {
  const [application, setApplication] = useState<ExcelShape>({} as ExcelShape);
  const [editButton, setEditButton] = useState(false);
  const [apiQuery, setApiQuery] = useState<updateColumnQuery>(
    {} as updateColumnQuery
  );

  useEffect(() => {
    setApplication(singleApplication);
    setApiQuery((state) => ({ ...state, applicationID: singleApplication.id }));
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

  const detailClicked = (clickedOnColumn: string) => {
    setApiQuery((state) => ({ ...state, applicationColumn: clickedOnColumn }));
    setEditButton(true);
  };

  if (singleApplication === null || singleApplication === undefined) return;

  useEffect(() => {
    console.log(apiQuery);
  }, [apiQuery]);

  return (
    <>
      {!editButton ? (
        <Card>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {Object.entries(application).map(([key, value]) => (
                <Box sx={boxStyles} onClick={() => detailClicked(key)}>
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
        <ApplicationEditor
        apiQuery={apiQuery}
        setApiQuery={setApiQuery}
          handleGoingBack={() => setEditButton(!editButton)}
        />
      )}
    </>
  );
};

export default SingleAppDisplay;
