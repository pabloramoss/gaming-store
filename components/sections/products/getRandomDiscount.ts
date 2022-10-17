// Get a random discount number %
export const getRandomDiscount = () => {
  const discounts = [5, 10, 15];
  const randomIndex = Math.floor(Math.random() * discounts.length);
  const randomDiscount = discounts[randomIndex];

  return randomDiscount;
};
