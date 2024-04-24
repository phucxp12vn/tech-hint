import { Stat, StatLabel } from "@chakra-ui/react";
import Link from "next/link";

interface TechItemProps {
  title: string;
}

const TechItem = ({ title }: TechItemProps) => {
  return (
    <Link href={`/${title}`}>
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
    </Link>
  );
};

export default TechItem;
