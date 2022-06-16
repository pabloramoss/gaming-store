// Return a random discount from the array [5,10,15]

export const discount = () => {
  const discounts = [5, 10, 15];
  const randomIndex = Math.floor(Math.random() * discounts.length);
  const randomDiscount = discounts[randomIndex];

  return randomDiscount;
};

export const originalPrice = (discount: number, price: number) => {
  const percentage = (100 - discount) / 100;
  const pricing = Math.floor(price / percentage);

  return pricing;
};
