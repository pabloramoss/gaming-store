import {Heading, Stack} from "@chakra-ui/react";
import {useEffect, useState} from "react";

import {useAppSelector} from "@redux/hooks";
import {usePagination} from "@hooks/usePagination";

import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import Categories from "./Categories";
import Filters from "./Filters";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.productList);
  const [currentCategory, setCurrentCategory] = useState("");
  const {currentProductsPagination, setCurrentPage, currentPage, productsPerPage, paginate} =
    usePagination();

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  const filterProducts =
    currentCategory === ""
      ? currentProductsPagination(products)
      : currentProductsPagination(
          products.filter((product) => product.category === currentCategory),
        );

  return (
    <Stack align="center" id="products" mt={100}>
      <Heading>GAMING PRODUCTS</Heading>
      <Stack>
        <Categories setCurrentCategory={setCurrentCategory} />
        <Filters />
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
