import {Alert, AlertIcon, AlertTitle} from "@chakra-ui/react";

const index: React.FC = () => {
  return (
    <Alert justifyContent="center" status="error">
      <AlertIcon />
      <AlertTitle>Under construction</AlertTitle>
    </Alert>
  );
};

export default index;
