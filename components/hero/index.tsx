import {Button, Center, Stack} from "@chakra-ui/react";

import Illustration from "./Illustration";
import TextSection from "./TextSection";

const Hero: React.FC = () => {
  return (
    <Center flexDirection={{base: "column", lg: "row"}} gap={60}>
      <Stack>
        <TextSection />
      </Stack>
      <Illustration />
    </Center>
  );
};

export default Hero;
