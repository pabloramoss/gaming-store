import {Button, Heading, Select, Stack, Text, Wrap} from "@chakra-ui/react";
import {useState} from "react";

import {useAppDispatch, useAppSelector} from "@redux/hooks";
import {Product} from "types/Product";
import {sortedAscendingProducts, sortedDescendingProducts} from "@redux/features/productSlice";

import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.productList);
  const categories = ["keyboard", "microphone", "monitor", "mouse", "webcam"];
  const [currentCategory, setCurrentCategory] = useState("");
  const filterProducts =
    currentCategory === ""
      ? products
      : products.filter((product) => product.category === currentCategory);
  const dispatch = useAppDispatch();

  const handleAscending = () => {
    dispatch(sortedAscendingProducts);
    console.log("hola");
  };

  return (
    <Stack align="center">
      <Heading>GAMING PRODUCTS</Heading>
      <Select
        isRequired
        bg="white"
        maxW="250px"
        mt={10}
        placeholder="Todos los productos"
        onChange={(e) => setCurrentCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Stack direction="row">
        <Button bg="gray.300" onClick={handleAscending}>
          <Text bgClip="text" color="#5B86E5">
            Lowest Price
          </Text>
        </Button>
        <Button bg="gray.300" onClick={() => dispatch(sortedDescendingProducts)}>
          {" "}
          <Text bgClip="text" color="#5B86E5">
            Highest Price
          </Text>
        </Button>
      </Stack>
      <Wrap justify="center" spacing={4}>
        {filterProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default Products;
