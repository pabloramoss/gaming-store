import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import {Stack} from "@chakra-ui/react";

import {api} from "@services/api";
import {IProduct} from "@types";
import ProductCard from "@components/products/ProductCard";
import ProductDetail from "@components/products/ProductDetail";
import BuyCard from "@components/products/BuyCard";

interface ProductProps {
  product: IProduct;
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
  console.log(product);

  return (
    <Stack direction={{base: "column", lg: "row"}} m={30}>
      <ProductDetail product={product} />
      <BuyCard />
    </Stack>
  );
};

export default ProductItem;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await api.getProducts();

  const paths = res.map((item: any) => ({
    params: {
      id: item.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const {id} = context.params;
  const product = await api.getProductById(id);

  return {
    props: {
      product,
    },
  };
};
