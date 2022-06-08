import {Product} from "types/Product";

type SortType = "ascending" | "descending";

export const sortProducts = (sortType: SortType, products: Product[]) => {
  const items = [...products];

  switch (sortType) {
    case "ascending":
      const sortAscending = items.sort((a: Product, b: Product) => a.price - b.price);

      return sortAscending;
    case "descending":
      const sortDescending = items.sort((a: Product, b: Product) => b.price - a.price);

      return sortDescending;
  }
};
