import {Stack, Image, Text, Box} from "@chakra-ui/react";

import {useAppSelector} from "@redux/hooks";
import {Product} from "types/Product";

import ButtonAddToCart from "./ButtonAddToCart";
import ButtonRemoveFromCart from "./ButtonRemoveFromCart";

interface ProductCheckoutProps {
  product: Product;
}

const ProductCardCheckout: React.FC<ProductCheckoutProps> = ({product}) => {
  const cart = useAppSelector((state) => state.products.cart);
  const isInCart = (product: Product) => cart.some((item) => item.id === product.id);

  return (
    <Stack
      align="center"
      bg="white"
      border="1px"
      borderColor="gray.300"
      direction="row"
      justifyContent="space-between"
      maxH="100px"
      maxW="700px"
      px={4}
      rounded={10}
    >
      <Box w={100}>
        <Image alt={product.title} h={100} objectFit="scale-down" src={product.image} w={100} />
      </Box>
      <Stack w="full">
        <Text fontSize="sm" fontWeight={600}>
          {product.title}
        </Text>
        <Text color="gray.400" fontWeight={500}>
          $ {product.price}
        </Text>
      </Stack>
      {Boolean(isInCart(product)) ? (
        <ButtonRemoveFromCart product={product} />
      ) : (
        <ButtonAddToCart product={product} />
      )}
    </Stack>
  );
};

export default ProductCardCheckout;
