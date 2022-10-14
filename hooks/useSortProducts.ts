import {setedProducts} from "@redux/features/productSlice";
import {useAppSelector, useAppDispatch} from "@redux/hooks";
import {sortProducts} from "@utils/sortProducts";

export const useSortProducts = () => {
  const products = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  const handleSort = (sortType: "ascending" | "descending") => {
    const sortedProducts = sortProducts(sortType, products);

    dispatch(setedProducts(sortedProducts));
  };

  return {
    handleSort,
  };
};
