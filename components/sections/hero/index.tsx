import {Center, Stack} from "@chakra-ui/react";

import Illustration from "./Illustration";
import TextSection from "./TextSection";

const Hero: React.FC = () => {
  return (
    <Center
      flexDirection={{base: "column", lg: "row"}}
      gap={{base: 10, lg: 40}}
      h={{base: 500, md: 700}}
    >
      <TextSection />
      <Illustration />
    </Center>
  );
};

export default Hero;
