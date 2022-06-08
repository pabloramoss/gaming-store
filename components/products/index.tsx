import {Heading, Stack} from "@chakra-ui/react";
import {useEffect, useState} from "react";

import {useAppSelector} from "@redux/hooks";
import {Product} from "types/Product";

import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import Categories from "./Categories";
import Filters from "./Filters";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const currentProductsPagination = (products: Product[]) => {
    const indexLastProduct = currentPage * productsPerPage;
    const indexFirstProduct = indexLastProduct - productsPerPage;
    const currentProducts = products.slice(indexFirstProduct, indexLastProduct);

    return currentProducts;
  };
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentProductsPagination,
    paginate,
    productsPerPage,
    currentPage,
    setCurrentPage,
  };
};

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products.productList);
  const [currentCategory, setCurrentCategory] = useState("");
  const {currentProductsPagination, setCurrentPage, currentPage, productsPerPage, paginate} =
    usePagination();

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  //pagination - abstraer en un custom hook
  /*   const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; */
  /* 
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
  }; */

  const filterProducts =
    currentCategory === ""
      ? currentProductsPagination(products)
      : currentProductsPagination(
          products.filter((product) => product.category === currentCategory),
        );

  return (
    <Stack align="center">
      <Heading>GAMING PRODUCTS</Heading>
      <Categories setCurrentCategory={setCurrentCategory} />
      <Filters />
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
