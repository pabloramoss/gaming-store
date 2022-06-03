import {Button} from "@chakra-ui/react";

import {productRemoved} from "@redux/features/productSlice";
import {useAppDispatch} from "@redux/hooks";
import {Product} from "types/Product";

interface ButtonAddToCartProps {
  product: Product;
}

const ButtonRemoveFromCart: React.FC<ButtonAddToCartProps> = ({product}) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (product: Product) => {
    dispatch(productRemoved(product));
  };

  return (
    <Button fontSize="xs" onClick={() => handleRemoveFromCart(product)}>
      Remove
    </Button>
  );
};

export default ButtonRemoveFromCart;
