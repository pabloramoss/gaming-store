import {Wrap} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";

import {Product} from "../../types/Product";

import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  return (
    <AnimatePresence>
      <Wrap justify="center" spacing={4}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrap>
    </AnimatePresence>
  );
};

export default ProductsList;
