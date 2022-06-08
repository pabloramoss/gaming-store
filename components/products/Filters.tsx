import {Stack, Button, Text} from "@chakra-ui/react";

import {setedProducts} from "@redux/features/productSlice";
import {useAppSelector, useAppDispatch} from "@redux/hooks";
import {sortProducts} from "@utils/sortProducts";

const Filters: React.FC = () => {
  const products = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  const handleAscending = () => {
    const sortedProducts = sortProducts("ascending", products);

    dispatch(setedProducts(sortedProducts));
  };
  const handleDescending = () => {
    const sortedProducts = sortProducts("descending", products);

    dispatch(setedProducts(sortedProducts));
  };

  return (
    <Stack direction="row">
      <Button bg="gray.300" onClick={handleAscending}>
        <Text bgClip="text" color="#5B86E5">
          Lowest Price
        </Text>
      </Button>
      <Button bg="gray.300" onClick={handleDescending}>
        <Text bgClip="text" color="#5B86E5">
          Highest Price
        </Text>
      </Button>
    </Stack>
  );
};

export default Filters;
