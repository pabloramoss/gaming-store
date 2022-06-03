import {Stack, Text} from "@chakra-ui/react";

import {useAppSelector} from "@redux/hooks";

const ProductCart: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);

  return (
    <Stack bg="teal.300" left={4} p={2} position="fixed" rounded="full">
      <Text>{cart.length}</Text>
    </Stack>
  );
};

export default ProductCart;
