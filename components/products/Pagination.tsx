import {Button, Stack} from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  currentCategory: string;
}

const Pagination: React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
  currentCategory,
}) => {
  const pageNumbers = [];

  if (totalProducts) {
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <Stack direction="row" py={4}>
      {pageNumbers.map((page) => (
        <Button
          key={page}
          bg={currentPage === page ? "cyan.600" : "gray.400"}
          isDisabled={currentCategory ? true : false}
          onClick={() => paginate(page)}
        >
          {page}
        </Button>
      ))}
    </Stack>
  );
};

export default Pagination;
