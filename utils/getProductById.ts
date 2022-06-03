import {Product} from "types/Product";
import productList from "@services/productsMock";

const getProductById = (id: string) => {
  const productById: Product | undefined = productList.find((product) => product.id === id);

  return productById;
};

export default getProductById;
