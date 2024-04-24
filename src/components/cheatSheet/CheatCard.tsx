import {
  Box,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const CheatCard = () => {
  return (
    <Card
      boxShadow={
        "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 80, 0.1) 0px 0px 0px 1px, rgba(0, 0, 80, 0.1) 0px 1px 1px 0px, rgba(0, 0, 80, 0.3) 0px 1.5px 3px -2px, rgba(0, 0, 80, 0.04) 0px 4px 6px 0px, rgba(0, 0, 80, 0.03) 0px 8px 12px -1px"
      }
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              import React from &apos;react&apos;
              <br />
              import ReactDOM from &apos;react-dom&apos;
            </Text>
          </Box>
          <Box>
            <Text pt="2" fontSize="sm">
              import React from &apos;react&apos;
              <br />
              import ReactDOM from &apos;react-dom&apos;
            </Text>
          </Box>
          <Box>
            <Text pt="2" fontSize="sm">
              import React from &apos;react&apos;
              <br />
              import ReactDOM from &apos;react-dom&apos;
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CheatCard;
