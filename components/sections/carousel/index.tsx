import {Stack} from "@chakra-ui/react";

import Carousel from "./Carousel";

const Intro: React.FC = () => {
  return (
    <Stack alignSelf="center" height={500} maxW="container.lg" width="100%">
      <Carousel />
    </Stack>
  );
};

export default Intro;
