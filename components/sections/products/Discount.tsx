import {Text} from "@chakra-ui/react";

import {getRandomDiscount} from "./getRandomDiscount";
const Discount: React.FC = () => {
  return <Text>{getRandomDiscount()}</Text>;
};

export default Discount;
