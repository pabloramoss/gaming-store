import React from "react";
import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";

import {store} from "@redux/store";

import theme from "../theme/theme";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default MyApp;
