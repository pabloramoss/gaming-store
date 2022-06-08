import {Heading, Stack, Text, Button} from "@chakra-ui/react";
import {motion} from "framer-motion";

const TextSection: React.FC = () => {
  const MotionStack = motion(Stack);
  const MotionText = motion(Text);

  return (
    <Stack>
      <MotionStack
        animate={{scale: 1}}
        initial={{scale: 0}}
        maxW="400px"
        transition={{
          type: "spring",
          stiffness: 80,
          delay: 0.2,
          duration: 0.3,
        }}
      >
        <Heading
          bgClip="text"
          bgGradient="linear(to-r, #5B86E5, #36D1DC)"
          fontSize={90}
          fontWeight={800}
          textAlign="center"
        >
          GAMING
          <Text color="gray.800" fontWeight={800}>
            ZONE
          </Text>
        </Heading>
        <Button _hover={{bg: "gray.500"}} bgGradient="linear(to-r, #5B86E5, #36D1DC)" color="white">
          View all products
        </Button>
      </MotionStack>
      <MotionText
        animate={{opacity: 1}}
        color="gray.500"
        fontSize="lg"
        fontWeight={600}
        initial={{opacity: 0}}
        transition={{delay: 1, duration: 0.5}}
      >
        Gaming products store
      </MotionText>
    </Stack>
  );
};

export default TextSection;
