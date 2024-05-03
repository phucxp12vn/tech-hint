import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Box py={8}>
      <Heading>Steve&apos;s tech cheatsheets</Heading>
      <Text fontSize="xl">
        Hey! I&apos;m Steve and this is a modest collection of tech cheatsheets
        I&apos;ve written.
      </Text>
    </Box>
  );
}

export default Hero;
