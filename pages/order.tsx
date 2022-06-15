import {VStack, Stack} from "@chakra-ui/react";

import {useAppSelector} from "@redux/hooks";
import Payment from "@components/checkout/Payment";
import Cart from "@components/checkout/Cart";

const Order: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);
  const isLogin = false;

  !isLogin && <p>Necesitas loguearte</p>;

  return (
    <VStack mt={100} width="100vw">
      <Stack bg="white" gap={10} p={{base: 0, md: 20}}>
        <Cart />
        {cart.length ? <Payment /> : ""}
      </Stack>
    </VStack>
  );
};

export default Order;
