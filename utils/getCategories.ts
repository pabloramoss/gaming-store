import {Product} from "./../types/Product";

export const getCategories = (products: Product[]) => {
  const allCategories = products.map((product) => product.category);

  return Array.from(new Set(allCategories));
};
