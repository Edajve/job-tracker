import { useEffect, useState } from "react";
import ApplicationShape from "../types/Excel";
import apiClient from "../services/http-client";
import helpers from "../helpers/helpers";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Stack,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface Props {
  setApplicationStatus: (status: boolean) => void;
}

const CreateApplication = ({ setApplicationStatus }: Props) => {
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [application, setApplication] = useState<ApplicationShape>({
    id: "",
    site: "",
    date: "",
    date_applied_to: "",
    company_name: "",
    position: "",
    fulltime_Contract: "",
    salary: "",
    company_website: "",
    contact_info: "",
    call_back_date: "",
    tech_stack: "",
    round_1: "",
    round_2: "",
    round_3: "",
    final: "",
    notes: "",
  });

  useEffect(() => {
    if (application.position === "") return;
    apiClient
      .post("/api/v1/applications/", application)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setErrorText(true);
        setTimeout(() => {
          setErrorText(false);
        }, 2500);
        new Error(error);
      });
    setSubmit(false);
  }, [submit]);

  return (
    <Stack width="80%">
      <Button onClick={() => setApplicationStatus(false)}>
        <ArrowLeftIcon />
      </Button>
      <FormControl padding={5} paddingTop={12}>
        <Box paddingBottom={4}>
          <FormLabel>Site</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({ ...prev, site: event.target.value }));
            }}
          />
          <FormHelperText>
            If you are using a third-party job site, such as LinkedIn or Indeed.
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            onChange={(event) => {
              const formatted = helpers.formatDate(event);
              setApplication((prev) => ({ ...prev, date: formatted }));
            }}
          />
          <FormHelperText>
            For Today's Date. Input to be in '
            <strong style={{ color: "#C6322E" }}>YYYY-MM-DD</strong>' format.
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Date Applied To</FormLabel>
          <Input
            type="date"
            onChange={(event) => {
              const formatted = helpers.formatDate(event);
              setApplication((prev) => ({
                ...prev,
                date_applied_to: formatted,
              }));
            }}
          />
          <FormHelperText>
            Date you applied to the Application. Input to be in '
            <strong style={{ color: "#C6322E" }}>YYYY-MM-DD</strong>' format.
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Company Name</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                company_name: event.target.value,
              }));
            }}
          />
          <FormHelperText>
            Name of the actual company you're applying to. Client or Company.
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Position</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                position: event.target.value,
              }));
            }}
          />
          <FormHelperText>Position you're applying for.</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel as="legend">Full Time / Part Time</FormLabel>
          <RadioGroup
            value={application.fulltime_Contract}
            onChange={(e) =>
              setApplication((prev) => ({
                ...prev,
                fulltime_Contract: e,
              }))
            }>
            <HStack spacing="24px">
              <Radio value="true">Full Time</Radio>
              <Radio value="false">Contract</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Is this a part time or contract job</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Salary</FormLabel>
          <Input
            type="number"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                salary: event.target.value,
              }));
            }}
          />
          <FormHelperText>
            Annual salary of the job.{" "}
            <strong style={{ color: "#C6322E" }}>Numbers Only</strong>
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Company Website</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                company_website: event.target.value,
              }));
            }}
          />
          <FormHelperText>
            WebSite of the company you're applying to
          </FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Contact Info</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                contact_info: event.target.value,
              }));
            }}
          />
          <FormHelperText>Any contact information to store</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Call Back Date</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                call_back_date: event.target.value,
              }));
            }}
          />
          <FormHelperText>Any date or notes on call backs</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Tech Stack</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                tech_stack: event.target.value,
              }));
            }}
          />
          <FormHelperText>What are they using?</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Round 1</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                round_1: event.target.value,
              }));
            }}
          />
          <FormHelperText>Any tips or notes for round 1?</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Round 2</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                round_2: event.target.value,
              }));
            }}
          />
          <FormHelperText>Any tips or notes for round 2?</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Round 3</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                round_3: event.target.value,
              }));
            }}
          />
          <FormHelperText>Any tips or notes for round 3?</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Final</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                final: event.target.value,
              }));
            }}
          />
          <FormHelperText>Hopefully you get here a lot</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <FormLabel>Notes</FormLabel>
          <Input
            type="text"
            onChange={(event) => {
              setApplication((prev) => ({
                ...prev,
                notes: event.target.value,
              }));
            }}
          />
          <FormHelperText>Extra Notes...</FormHelperText>
        </Box>
        <Box paddingBottom={4}>
          <Button onClick={() => setSubmit(true)}>Submit</Button>
        </Box>
      </FormControl>
      {success && <h4>Application added, please navigate back and refresh applications</h4>}
      {success && <h4>Application added, please navigate back and refresh applications</h4>}
      {errorText && <h4>Could not create this application</h4>}
    </Stack>
  );
};

export default CreateApplication;
