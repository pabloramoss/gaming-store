import {Stack, Text, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";

import {Product} from "types/Product";
import {useAppDispatch, useAppSelector} from "@redux/hooks";
import {productAdded} from "@redux/features/productSlice";

import ButtonAddToCart from "./ButtonAddToCart";
import ButtonRemoveFromCart from "./ButtonRemoveFromCart";
interface BuyCardProps {
  product: Product;
}

const BuyCard: React.FC<BuyCardProps> = ({product}) => {
  const cart = useAppSelector((state) => state.products.cart);
  const isInCart = (product: Product) => cart.some((item) => item.id === product.id);
  const router = useRouter();
  const dispatch = useAppDispatch();

  //If product is in cart, push to /order, else add to cart and push to /order as well
  const handleBuyProduct = (product: Product) => {
    const isProductInCart = cart.some((item: Product) => item.id === product.id);

    if (isProductInCart) {
      router.push("/order");
    } else {
      dispatch(productAdded(product));
      router.push("/order");
    }
  };

  return (
    <Stack align="center" bg="white" justify="center" maxW="320px" p={5} rounded={10} shadow="md">
      <Text color="green.500" fontWeight={500}>
        Free shipping
      </Text>
      <Text color="gray.600" fontWeight={500}>
        In stock
      </Text>
      {Boolean(isInCart(product)) ? (
        <ButtonRemoveFromCart product={product} />
      ) : (
        <ButtonAddToCart product={product} />
      )}
      <Button bg="gray.300" color="#5B86E5" w="100%" onClick={() => handleBuyProduct(product)}>
        Buy now
      </Button>
    </Stack>
  );
};

export default BuyCard;
