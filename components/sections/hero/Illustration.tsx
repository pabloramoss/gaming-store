import {Stack, Image, Box} from "@chakra-ui/react";
import {motion} from "framer-motion";

const Illustration: React.FC = () => {
  const MotionBox = motion(Box);

  return (
    <Stack align="center" position="relative">
      <Box w={{base: 200, md: 400}} zIndex={5}>
        <Image alt="Gaming zone illustration" h="100%" src="/images/illustration.png" w="100%" />
      </Box>
      <MotionBox
        animate={{scale: 1}}
        bgGradient="linear(to-r, #5B86E5, #36D1DC)"
        bottom={0}
        className="illustration"
        h={{base: 150, md: 300}}
        initial={{scale: 0}}
        opacity={0.6}
        position="absolute"
        rounded={50}
        transition={{
          type: "spring",
          stiffness: 80,
          delay: 0.2,
          duration: 0.3,
        }}
        w={{base: 300, md: 500}}
      />
    </Stack>
  );
};

export default Illustration;
