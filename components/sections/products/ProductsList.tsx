import {Wrap} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";

import {Product} from "../../../types/Product";

import ProductCard from "./cards/ProductCard";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  return (
    <AnimatePresence>
      <Wrap id="products" justify="center" maxW="container.lg" spacing={4}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    </AnimatePresence>
  );
};

export default ProductsList;
