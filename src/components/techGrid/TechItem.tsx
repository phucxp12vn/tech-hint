import {
  Stat,
  StatLabel,
} from "@chakra-ui/react";

interface TechItemProps {
  title: string;
}

const TechItem = ({ title }: TechItemProps) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
};

export default TechItem;
