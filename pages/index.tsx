import type {GetStaticProps, NextPage} from "next";

import {useEffect} from "react";
import {Container} from "@chakra-ui/react";

import OfferDay from "@components/sections/carousel";
import Layout from "@components/layout";
import Hero from "@components/sections/hero";
import Products from "@components/sections/products";
import {api} from "@services/api";
import {Product} from "types/Product";
import {useAppDispatch} from "@redux/hooks";
import {setedProducts} from "@redux/features/productSlice";
import UnderConstruction from "@components/underConstruction";

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
      <UnderConstruction />
      <Hero />
      <OfferDay />
      <Container position="relative" />
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
