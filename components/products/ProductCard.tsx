import {Stack, Text, Image, Divider} from "@chakra-ui/react";
import Link from "next/link";

import {IProduct} from "@types";

interface ProductCardProps {
  product: IProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  return (
    <Link href={`/product/${product.id}`}>
      <a>
        <Stack bg="white" maxW="300px" rounded={10} shadow="md">
          <Image alt={product.title} h={300} objectFit="scale-down" src={product.image} w={300} />
          <Divider />
          <Stack p={4}>
            <Stack direction="row">
              <Text fontSize="xl" fontWeight="700">
                {product.price} $
              </Text>
              <Text color="green.400" fontWeight="500">
                5% OFF
              </Text>
            </Stack>
            <Text color="green.400" fontWeight="500">
              Free ship
            </Text>
            <Text>{product.title}</Text>
          </Stack>
        </Stack>
      </a>
    </Link>
  );
};

export default ProductCard;
