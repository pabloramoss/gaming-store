import {FormControl, FormLabel, Input, Stack, Button} from "@chakra-ui/react";

import Layout from "@components/layout";

const Login: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Layout>
      <Stack align="center" h="100vh" justify="center">
        <Stack bg="gray.300" maxW={400} p={10} rounded={10} shadow="xl" w="100%">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Username</FormLabel>
              <Input required id="first-name" placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Password</FormLabel>
              <Input required id="first-name" placeholder="First name" type="password" />
            </FormControl>
            <Button colorScheme="blue" mt={5} type="submit" w="100%">
              Login
            </Button>
          </form>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Login;
