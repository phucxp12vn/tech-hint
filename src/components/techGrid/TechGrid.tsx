import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import TechItem from "./TechItem";

interface TechGridProps {
  commonTech: string[];
}

const TechGrid = ({ commonTech }: TechGridProps) => {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {commonTech.map((tech) => (
          <TechItem key={tech} title={tech} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TechGrid;
