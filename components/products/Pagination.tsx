import {Recoverable} from "repl";

import {Button, Stack, Link} from "@chakra-ui/react";
import React, {useCallback, useEffect} from "react";

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
          bg={currentPage === page ? "#5B86E5" : "gray.300"}
          color={currentPage === page ? "white" : "gray.500"}
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
