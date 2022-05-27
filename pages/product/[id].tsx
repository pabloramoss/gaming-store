import {useRouter} from "next/router";

const ProductItem: React.FC = () => {
  const {
    query: {productID},
  } = useRouter();

  return <div>Este el producto con id: {productID}</div>;
};

export default ProductItem;
