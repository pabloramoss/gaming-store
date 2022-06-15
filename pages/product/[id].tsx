import {GetStaticPaths, GetStaticProps} from "next";
import {Stack} from "@chakra-ui/react";

import {api} from "@services/api";
import {Product} from "types/Product";
import ProductDetail from "@components/products/ProductDetail";
import BuyCard from "@components/products/BuyCard";
import Layout from "@components/layout";

interface ProductProps {
  product: Product;
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
  return (
    <Layout>
      <Stack direction={{base: "column", lg: "row"}} justify="center" mt={200}>
        <ProductDetail product={product} />
        <BuyCard product={product} />
      </Stack>
    </Layout>
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
