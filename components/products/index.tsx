import {Stack, Heading, Select, Button, Wrap, Text} from "@chakra-ui/react";

import productList from "@services/productsMock";
import {IProduct} from "@types";

import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const categories = ["Keyboard", "Mouse", "Mic", "Monitor", "Webcam"];

  return (
    <Stack>
      <Heading>GAMING PRODUCTS</Heading>
      <Select
        isRequired
        bg="white"
        mt={10}
        /* onChange={(e)=>setCategory(e.target.value)}  */
        placeholder="Todos los productos"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Stack direction="row">
        <Button bg="gray.300">
          <Text bgClip="text" bgGradient="linear(to-r, #5B86E5, #36D1DC)">
            Lowest Price
          </Text>
        </Button>
        <Button bg="gray.300">
          {" "}
          <Text bgClip="text" bgGradient="linear(to-r, #5B86E5, #36D1DC)">
            Highest Price
          </Text>
        </Button>
      </Stack>
      <Wrap spacing={4}>
        {productList.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default Products;
