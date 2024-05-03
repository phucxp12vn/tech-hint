import { Box, Text } from "@chakra-ui/react";

import CheatCard from "./CheatCard";

const CheatSheet = () => {
  return (
    <Box py={4} borderTop="1px solid blue">
      <Text fontSize="xl" as="b" mb={3} display="inline-block">
        Components
      </Text>
      <CheatCard />
    </Box>
  );
};

export default CheatSheet;
