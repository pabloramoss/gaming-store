import {Stack, Text, Image, Divider, Button} from "@chakra-ui/react";
import Link from "next/link";

import {IProduct} from "@types";

const BuyCard: React.FC = () => {
  return (
    <Stack align="center" bg="white" maxW="300px" rounded={10} shadow="md">
      <Text>Free shipping</Text>
      <Text>In stock</Text>
      <Text>In stock</Text>
      <Button>Add to cart</Button>
      <Button>Buy now</Button>
    </Stack>
  );
};

export default BuyCard;
