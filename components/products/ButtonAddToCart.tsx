import {Button} from "@chakra-ui/react";

import {productAdded} from "@redux/features/productSlice";
import {useAppDispatch} from "@redux/hooks";
import {Product} from "types/Product";

interface ButtonAddToCartProps {
  product: Product;
}

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({product}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(productAdded(product));
  };

  return <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>;
};

export default ButtonAddToCart;
