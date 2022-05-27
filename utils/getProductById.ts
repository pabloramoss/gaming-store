import {IProduct} from "@types";
import productList from "@services/productsMock";

const getProductById = (id: string) => {
  const productById: IProduct | undefined = productList.find((product) => product.id === id);

  return productById;
};

export default getProductById;
