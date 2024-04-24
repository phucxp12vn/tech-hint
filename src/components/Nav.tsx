"use client";

import {
  Box,
  Flex,
  Avatar,
  Menu,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Nav = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>TECHHINT.IO</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Avatar size={"sm"} />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
