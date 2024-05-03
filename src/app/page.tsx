import { Box } from "@chakra-ui/react";

import Hero from "@/components/Hero";
import TechSearch from "@/components/TechSearch";
import TechGrid from "@/components/techGrid/TechGrid";

const dummy = ["react", "redux", "javascript", "docker", "array"];

function Home() {
  return (
    <Box px={8} py={4} maxW="780px" m="auto" textAlign="center">
      <Hero />
      <TechSearch />
      <TechGrid commonTech={dummy} />
    </Box>
  );
}

export default Home;
