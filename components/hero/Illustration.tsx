import {Stack, Image, Box} from "@chakra-ui/react";
import {motion} from "framer-motion";

const Illustration: React.FC = () => {
  const MotionBox = motion(Box);

  return (
    <Stack align="center" position="relative">
      <Image
        alt="Gaming zone illustration"
        h={400}
        src="/images/illustration.png"
        w={400}
        zIndex={5}
      />
      <MotionBox
        animate={{scale: 1}}
        bgGradient="linear(to-r, #5B86E5, #36D1DC)"
        bottom={0}
        className="illustration"
        h={300}
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
        w={500}
      />
    </Stack>
  );
};

export default Illustration;
