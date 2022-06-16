import {Stack} from "@chakra-ui/react";

import BtnFilter from "./BtnFilter";

const Filters: React.FC = () => {
  return (
    <Stack direction="row">
      <BtnFilter sortType="ascending" />
      <BtnFilter sortType="descending" />
    </Stack>
  );
};

export default Filters;
