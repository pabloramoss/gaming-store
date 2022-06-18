import {Stack, Text} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Stack
      align="center"
      bg="white"
      bottom={0}
      justify="center"
      position="absolute"
      py={4}
      w="100%"
    >
      <Text>Made with ❤ by Pablo Ramos</Text>
    </Stack>
  );
};

export default Footer;
