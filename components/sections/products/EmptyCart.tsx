import {Stack, Image, Button, Heading, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";

function EmptyCart() {
  const router = useRouter();

  return (
    <Stack alignItems="center" pt={100}>
      <Image
        alt="empty cart"
        blendMode="hard-light"
        h={{base: "150px", sm: "300px"}}
        src="/emptyCart.png"
        w={{base: "150px", sm: "300px"}}
      />
      <Heading>Empty cart</Heading>
      <Text>It looks like your cart is empty</Text>
      <Button
        _hover={{bg: "gray.500"}}
        bgGradient="linear(to-r, #5B86E5, #36D1DC)"
        color="white"
        onClick={() => router.push("/")}
      >
        Add new products!
      </Button>
    </Stack>
  );
}

export default EmptyCart;
