import {
  Box,
  Divider,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Application {
  Site: string;
  Date: string;
  Date_applied_to: string;
  Company_name: string;
  Position: string;
  Fulltime_Contract: string;
  Salary: string;
  Company_Website: string;
  Contact_info: string;
  Call_back_date: string;
  Tech_Stack: string;
  Round_1: string;
  Round_2: string;
  Round_3: string;
  Final: string;
  Notes: string;
}

interface Props {
  singleApplication(singleApp: Application): Application;
}

const SingleAppDisplay = ({ singleApplication }: Props) => {
  const [application, setApplication] = useState<null | any>(null);

  useEffect(() => {
    setApplication(singleApplication);
  }, [application]);

  const titleStyles = {
      fontSize: '3xl'
  };

  const descriptionStyles = {
    color: "orange.200",
    overflowWrap: "break-word"
  }

  const boxStyles = {
    borderRadius: "10px",
    padding: "1rem",
    overflow: "hidden"
  };

  if (singleApplication === null || singleApplication === undefined) return;
  
  return (
    <SimpleGrid column={8} minChildWidth="300px" spacing="5px" height="50rem">
      <Box sx={boxStyles} bg="blue.900" height="200px">
        <Text sx={titleStyles} as='b' fontSize="2xl">
          Site:
        </Text>
        <Text sx={descriptionStyles}>{application?.Site}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Date:</Text>
      <Text sx={descriptionStyles}>{application?.Date}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Date Applied To:</Text>
      <Text sx={descriptionStyles}>{application?.Date_applied_to}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Company Name:</Text>
      <Text sx={descriptionStyles}>{application?.Company_name}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Position:</Text>
      <Text sx={descriptionStyles}>{application?.Position}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Fulltime/Contract:</Text>
      <Text sx={descriptionStyles}>{application?.Fulltime_Contract}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Salary:</Text>
      <Text sx={descriptionStyles}>{application?.Salary}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Company Website:</Text>
      <Text sx={descriptionStyles}>{application?.Company_Website}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Contact information:</Text>
      <Text sx={descriptionStyles}>{application?.Contact_info}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Call Back Date:</Text>
      <Text sx={descriptionStyles}>{application?.Call_back_date}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Tech Stack:</Text>
      <Text sx={descriptionStyles}>{application?.Tech_Stack}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Round 1:</Text>
      <Text sx={descriptionStyles}>{application?.Round_1}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Round 2:</Text>
      <Text sx={descriptionStyles}>{application?.Round_2}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Round 3:</Text>
      <Text sx={descriptionStyles}>{application?.Round_3}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Final:</Text>
      <Text sx={descriptionStyles}>{application?.Final}</Text>
      </Box>
      <Box sx={boxStyles} bg="blue.900" height="200px">
      <Text sx={titleStyles} as='b' fontSize="2xl">Notes:</Text>
      <Text sx={descriptionStyles}>{application?.Notes}</Text> 
      </Box>
    </SimpleGrid>
  );
};

export default SingleAppDisplay;
