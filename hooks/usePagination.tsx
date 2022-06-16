import {useState} from "react";

import {Product} from "../types/Product";

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
