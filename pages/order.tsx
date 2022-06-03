import {Stack} from "@chakra-ui/react";

import EmptyCart from "@components/products/EmptyCart";
import ProductCardCheckout from "@components/products/ProductCardCheckout";
import {useAppSelector} from "@redux/hooks";

const Order: React.FC = () => {
  const cart = useAppSelector((state) => state.products.cart);

  return (
    <Stack>
      {cart.length ? (
        cart.map((product) => <ProductCardCheckout key={product.id} product={product} />)
      ) : (
        <EmptyCart />
      )}
    </Stack>
  );
};

export default Order;
