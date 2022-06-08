import {Stack, Text, Image, Divider, Box} from "@chakra-ui/react";
import Link from "next/link";
import {motion} from "framer-motion";

import {Product} from "types/Product";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      layout
      animate={{y: 0, opacity: 1}}
      exit={{y: 50, opacity: 0}}
      initial={{y: 50, opacity: 0}}
    >
      <Link href={`/product/${product.id}`}>
        <a>
          <Stack bg="white" h="full" maxW="300px" rounded={10} shadow="md">
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
    </MotionBox>
  );
};

export default ProductCard;
