import { Box, Flex, Avatar, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Link href="/">TECHHINT.IO</Link>
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
