import type {NextPage} from "next";

import Layout from "@components/layout";
import Hero from "@components/hero";
import Products from "@components/products";

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
