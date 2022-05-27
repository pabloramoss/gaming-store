import axios from "axios";

import productList from "./productsMock";
const BASE_URL = "http://simpleapistore.vercel.app/api";

const requester = axios.create({
  baseURL: BASE_URL,
});

export async function getProducts() {
  try {
    const res = await requester.get("/products");

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id: number) {
  try {
    const res = await requester.get(`/products/${id}`);

    return res;
  } catch (error) {
    console.error(error);
  }
}

export function getMock() {
  return productList;
}
