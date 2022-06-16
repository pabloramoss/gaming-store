import {Heading, Stack, Text} from "@chakra-ui/react";

import EmptyCart from "@components/sections/products/EmptyCart";
import ProductCardCheckout from "@components/sections/products/cards/ProductCardCheckout";
import {useAppSelector} from "@redux/hooks";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);
  const totalPrice = cart.reduce((partialSum, a) => partialSum + a.price, 0);

  return (
    <Stack>
      {cart.length ? <Heading fontSize="xl">CART</Heading> : ""}
      {cart.length ? (
        cart.map((product) => <ProductCardCheckout key={product.id} product={product} />)
      ) : (
        <EmptyCart />
      )}
      {cart.length ? <Text fontWeight={600}>Total price: $ {totalPrice}</Text> : ""}
    </Stack>
  );
};

export default Cart;
