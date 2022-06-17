import {VStack, Stack} from "@chakra-ui/react";

import {useAppSelector} from "@redux/hooks";
import Payment from "@components/checkout/Payment";
import Cart from "@components/checkout/Cart";
import Layout from "@components/layout";

const Order: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);
  const isLogin = false;

  !isLogin && <p>Necesitas loguearte</p>;

  return (
    <Layout>
      <VStack mt={100} width="100vw">
        <Stack bg="white" gap={10} p={{base: 0, md: 20}} rounded={10}>
          <Cart />
          {cart.length ? <Payment /> : ""}
        </Stack>
      </VStack>
    </Layout>
  );
};

export default Order;
