import {Product} from "./Product";

export interface ProductsApiResponse {
  results: Product;
  total: number;
  size: number;
  page: number;
  nextPage: number;
  previousPage?: number;
  hasMore: boolean;
}
