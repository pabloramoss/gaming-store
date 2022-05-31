import {Stack, Image, Heading, Text, Flex} from "@chakra-ui/react";

import {IProduct} from "@types";

interface ProductDetailProps {
  product: IProduct;
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
      <Image alt={product.title} objectFit="scale-down" src={product.image} w={400} />
      <Stack>
        <Heading size="md">{product.title}</Heading>
        <Flex>
          <Heading fontWeight={500}>${product.price}</Heading>
          <Text color="green.400" fontWeight={600}>
            30% OFF
          </Text>
        </Flex>
        <Text fontWeight={500}>Desccription</Text>
        <Text>{product.description}</Text>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
