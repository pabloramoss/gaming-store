import {Button, Text} from "@chakra-ui/react";

import {useAppSelector, useAppDispatch} from "@redux/hooks";
import {setedProducts} from "@redux/features/productSlice";
import {sortProducts} from "@utils/sortProducts";

interface BtnFilterProps {
  sortType: "ascending" | "descending";
}

const BtnFilter: React.FC<BtnFilterProps> = ({sortType}) => {
  const products = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  const handleSort = (sortType: "ascending" | "descending") => {
    const sortedProducts = sortProducts(sortType, products);

    dispatch(setedProducts(sortedProducts));
  };

  return (
    <Button bg="gray.300" onClick={() => handleSort(sortType)}>
      <Text bgClip="text" color="#5B86E5">
        {sortType === "ascending" ? "Lowest Price" : "Highest Price"}
      </Text>
    </Button>
  );
};

export default BtnFilter;
