import {Product} from "types/Product";
import productList from "@services/productsMock";

// return the product with the specific id
const getProductById = (id: string) => {
  const productById: Product | undefined = productList.find((product) => product.id === id);

  return productById;
};

export default getProductById;
