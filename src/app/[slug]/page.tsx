import { Text, Heading, SimpleGrid } from "@chakra-ui/react";

import CheatSheet from "@/components/cheatSheet/CheatSheet";

const TechPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <>
      <Heading py={8}>React.js cheatsheet</Heading>
      <Text fontSize="xl" mb={8}>
        React is a JavaScript library for building user interfaces. This guide
        targets React v15 to v16.
      </Text>
      <main>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <CheatSheet />
          <CheatSheet />
          <CheatSheet />
          <CheatSheet />
          <CheatSheet />
          <CheatSheet />
        </SimpleGrid>
      </main>
    </>
  );
};

export default TechPage;
