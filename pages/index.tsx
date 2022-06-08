import type {GetStaticProps, NextPage} from "next";

import {useEffect} from "react";

import Layout from "@components/layout";
import Hero from "@components/hero";
import Products from "@components/products";
import {api} from "@services/api";
import ProductCart from "@components/ProductCart";
import {Product} from "types/Product";
import {useAppDispatch} from "@redux/hooks";
import {setedProducts} from "@redux/features/productSlice";

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setedProducts(products));
  }, []);

  return (
    <Layout
      headProps={{
        title: "Home | Gaming Zone",
        description: "Gaming products store",
        url: "https://gaming-zone.vercel.app",
      }}
    >
      <Hero />
      <Products />
      <ProductCart />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.getProducts();

  return {
    props: {
      products,
    },
  };
};
