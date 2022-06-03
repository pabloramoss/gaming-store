import {Product} from "types/Product";

type SortType = "ascending" | "descending";

export const sortProducts = (sortType: SortType, products: Product[]) => {
  const sortAscending = products.sort((a: Product, b: Product) => a.price - b.price);

  if (sortType === "ascending") {
    return sortAscending;
  } else {
    return sortAscending.reverse();
  }
};
