import {Button, Heading, Select, Stack, Text, Wrap} from "@chakra-ui/react";
import {useState} from "react";

import {useAppDispatch, useAppSelector} from "@redux/hooks";
import {Product} from "types/Product";
import {sortedAscendingProducts, sortedDescendingProducts} from "@redux/features/productSlice";
import {useGetProductsQuery} from "@redux/features/products/productsApiSlice";

import ProductCard from "./ProductCard";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.productList);
  const categories = ["keyboard", "microphone", "monitor", "mouse", "webcam"];
  const [currentCategory, setCurrentCategory] = useState("");
  const {data = [], isFetching} = useGetProductsQuery();

  const dispatch = useAppDispatch();

  const handleAscending = () => {
    dispatch(sortedAscendingProducts);
    console.log("esta es la data", data);
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const currentProductsPagination = (
    products: Product[],
    currentPage: number,
    productsPerPage: number,
  ) => {
    const indexLastProduct = currentPage * productsPerPage;
    const indexFirstProduct = indexLastProduct - productsPerPage;
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

    return currentProducts;
  };
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterProducts =
    currentCategory === ""
      ? currentProductsPagination(products, currentPage, productsPerPage)
      : currentProductsPagination(
          products.filter((product) => product.category === currentCategory),
          currentPage,
          productsPerPage,
        );

  return (
    <Stack align="center">
      <Button onClick={() => console.log(data)}>data</Button>
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
      <Pagination
        currentCategory={currentCategory}
        currentPage={currentPage}
        paginate={paginate}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
      />
      <ProductsList products={filterProducts} />
      <Pagination
        currentCategory={currentCategory}
        currentPage={currentPage}
        paginate={paginate}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
      />
    </Stack>
  );
};

export default Products;
