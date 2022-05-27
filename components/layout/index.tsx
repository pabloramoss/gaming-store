import {VStack, Flex} from "@chakra-ui/react";

import Navbar from "@components/navbar";
import LayoutHead, {LayoutHeadProps} from "@components/layout/LayoutHead";
import Footer from "@components/footer";
import ScrollTopButton from "@components/navbar/ScrollTopButton";

interface LayoutProps {
  /* Optional head props for using in different pages */
  headProps?: LayoutHeadProps;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = (props) => {
  const {headProps, children} = props;

  return (
    <VStack maxW="container.xl">
      {/* SEO Head */}
      <LayoutHead {...headProps} />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Flex flexDir="column" width="full">
        {children}
      </Flex>

      <ScrollTopButton limit={400} />

      {/* Footer */}
      <Footer />
    </VStack>
  );
};

export default Layout;
