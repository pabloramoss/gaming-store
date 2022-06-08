import {Stack, Image, Box} from "@chakra-ui/react";

const Illustration: React.FC = () => {
  return (
    <Stack align="center" position="relative">
      <Image
        alt="Gaming zone illustration"
        h={400}
        src="/images/illustration.png"
        w={400}
        zIndex={5}
      />
      <Box
        bgGradient="linear(to-r, #5B86E5, #36D1DC)"
        bottom={0}
        h={300}
        opacity={0.6}
        position="absolute"
        rounded={50}
        w={500}
      />
    </Stack>
  );
};

export default Illustration;
