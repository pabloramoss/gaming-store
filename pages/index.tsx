import type {GetStaticProps, NextPage} from "next";

import Layout from "@components/layout";
import Hero from "@components/hero";
import Products from "@components/products";
import {api} from "@services/api";

const Home: NextPage = () => {
  return (
    <Layout
      headProps={{
        title: "Home | Gaming Zone",
        description: "E-commerce for gaming products",
        url: "https://gamingzonestore.vercel.app",
      }}
    >
      <Hero />
      <Products />
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
