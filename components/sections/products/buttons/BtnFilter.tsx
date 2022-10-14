import {Button, Text} from "@chakra-ui/react";

import {useSortProducts} from "@hooks/useSortProducts";

interface BtnFilterProps {
  sortType: "ascending" | "descending";
}

const BtnFilter: React.FC<BtnFilterProps> = ({sortType}) => {
  const {handleSort} = useSortProducts();

  return (
    <Button bg="gray.300" onClick={() => handleSort(sortType)}>
      <Text bgClip="text" color="#5B86E5">
        {sortType === "ascending" ? "Lowest Price" : "Highest Price"}
      </Text>
    </Button>
  );
};

export default BtnFilter;
