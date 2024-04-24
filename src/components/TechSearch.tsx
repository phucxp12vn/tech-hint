"use client";

import {
  Box,
  Text,
  InputLeftElement,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const TechSearch = () => {
  return (
    <Box pb={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          width="100px"
          left="7px"
          top="4px"
          fontSize="1.1em"
        >
          <Text>techhint.io /</Text>
        </InputLeftElement>
        <Input pl="105px" size="lg" variant="outline" placeholder="Search" />
        <InputRightElement top="4px" fontSize="1.3em">
          <SearchIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default TechSearch;
