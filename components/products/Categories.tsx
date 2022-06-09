import {Select} from "@chakra-ui/react";

import {usePagination} from "./index";

interface CategoriesProps {
  setCurrentCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({setCurrentCategory}) => {
  const categories = ["keyboard", "microphone", "monitor", "mouse", "webcam"];
  const {setCurrentPage} = usePagination();

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPage(3);
    setCurrentCategory(event.target.value);
  };

  return (
    <Select
      isRequired
      bg="white"
      maxW="250px"
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
