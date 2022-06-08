import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {Product} from "../../../types/Product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://simpleapistore.vercel.app/api",
    mode: "no-cors",
  }),
  endpoints(builder) {
    return {
      getProducts: builder.query<Product[], void>({
        query() {
          return "/products";
        },
      }),
    };
  },
});

export const {useGetProductsQuery} = apiSlice;
