import {Stack, Text, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";

import {Product} from "types/Product";
import {useAppSelector} from "@redux/hooks";

import ButtonAddToCart from "./ButtonAddToCart";
import ButtonRemoveFromCart from "./ButtonRemoveFromCart";
interface BuyCardProps {
  product: Product;
}

const BuyCard: React.FC<BuyCardProps> = ({product}) => {
  const cart = useAppSelector((state) => state.products.cart);
  const isInCart = (product: Product) => cart.some((item) => item.id === product.id);
  const router = useRouter();

  return (
    <Stack align="center" bg="white" maxW="300px" rounded={10} shadow="md">
      <Text>Free shipping</Text>
      <Text>In stock</Text>
      {Boolean(isInCart(product)) ? (
        <ButtonRemoveFromCart product={product} />
      ) : (
        <ButtonAddToCart product={product} />
      )}
      <Button onClick={() => router.push("/order")}>Buy now</Button>
    </Stack>
  );
};

export default BuyCard;
