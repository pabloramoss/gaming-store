import {Stack, Heading, FormControl, FormLabel, Input} from "@chakra-ui/react";

import ButtonBase from "@components/commons";

const Payment: React.FC = () => {
  return (
    <Stack>
      <Heading fontSize="xl">PAYMENT</Heading>
      <form>
        <Stack direction="row">
          <FormControl>
            <FormLabel color="gray.600" fontSize="sm" htmlFor="email">
              Card number
            </FormLabel>
            <Input required id="email" placeholder="4444 4444 4444 4444" type="email" />
          </FormControl>
          <FormControl w="30%">
            <FormLabel color="gray.600" fontSize="sm" htmlFor="email">
              CVV code
            </FormLabel>
            <Input required id="email" placeholder="123" type="email" />
          </FormControl>
        </Stack>
        <Stack mt={5} w="100%">
          <ButtonBase>Pay</ButtonBase>
        </Stack>
      </form>
    </Stack>
  );
};

export default Payment;
