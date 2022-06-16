import {Select} from "@chakra-ui/react";

import {usePagination} from "@hooks/usePagination";
import {useAppSelector} from "@redux/hooks";
import {getCategories} from "@utils/getCategories";
interface CategoriesProps {
  setCurrentCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({setCurrentCategory}) => {
  const products = useAppSelector((state) => state.products.productList);

  const categories = getCategories(products);
  const {setCurrentPage} = usePagination();

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(3);
    setCurrentCategory(event.target.value);
  };

  return (
    <Select
      isRequired
      bg="white"
      mt={10}
      placeholder="All products"
      onChange={handleChangeCategory}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default Categories;
