import {Text} from "@chakra-ui/react";
const Discount: React.FC = () => {
  // Get a random discount number %
  const discount = () => {
    const discounts = [5, 10, 15];
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const randomDiscount = discounts[randomIndex];

    return randomDiscount;
  };

  return <Text>{discount()}</Text>;
};

export default Discount;
