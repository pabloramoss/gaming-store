import axios from "axios";

import {Product} from "types/Product";

import productList from "./productsMock";
const BASE_URL = "http://simpleapistore.vercel.app/api";

const requester = axios.create({
  baseURL: BASE_URL,
});

/* 
export const getProducts = async () => {
  try {
    const res = await requester.get("/products");

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const res = await requester.get(`/products/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export function getMock() {
  return productList;
}
 */
export const api = {
  getProducts: async () => {
    try {
      const res = await requester.get("/products");

      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  getProductById: async (id: number) => {
    try {
      const res = await requester.get(`/products/${id}`);

      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
