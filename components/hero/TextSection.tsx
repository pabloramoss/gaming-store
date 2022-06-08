import {Heading, Stack, Text} from "@chakra-ui/react";

const TextSection: React.FC = () => {
  return (
    <Stack maxW="400px">
      <Heading
        bgClip="text"
        bgGradient="linear(to-r, #5B86E5, #36D1DC)"
        fontSize={70}
        fontWeight={800}
        textAlign="center"
      >
        GAMING{" "}
        <Text color="gray.800" fontWeight={800}>
          ZONE
        </Text>
      </Heading>
      <Text color="gray.500" fontSize="lg" fontWeight={600}>
        Gaming products store
      </Text>
    </Stack>
  );
};

export default TextSection;
