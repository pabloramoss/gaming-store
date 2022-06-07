import {Wrap} from "@chakra-ui/react";

import {Product} from "../../types/Product";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  return (
    <Wrap justify="center" spacing={4}>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrap>
  );
};

export default ProductsList;
