import {Stack, Image, Heading, Text, Flex} from "@chakra-ui/react";

import {Product} from "types/Product";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({product}) => {
  return (
    <Stack
      bg="white"
      border="1px"
      borderColor="gray.300"
      direction={{base: "column", lg: "row"}}
      maxW="800px"
      rounded={10}
    >
      <Image alt={product.title} objectFit="scale-down" rounded={10} src={product.image} w={400} />
      <Stack p={5}>
        <Heading size="md">{product.title}</Heading>
        <Flex>
          <Heading fontWeight={500}>${product.price}</Heading>
          <Text color="green.400" fontWeight={600}>
            30% OFF
          </Text>
        </Flex>
        <Text fontWeight={500}>Desccription</Text>
        <Text fontSize="sm">{product.description}</Text>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
