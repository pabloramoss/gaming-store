import {Button, Center, Stack} from "@chakra-ui/react";

import Illustration from "./Illustration";
import TextSection from "./TextSection";

const Hero: React.FC = () => {
  return (
    <Center flexDirection={{base: "column", lg: "row"}} gap={20}>
      <Stack>
        <TextSection />
        <Button _hover={{bg: "gray.500"}} bgGradient="linear(to-r, #5B86E5, #36D1DC)" color="white">
          View all products
        </Button>
      </Stack>
      <Illustration />
    </Center>
  );
};

export default Hero;
