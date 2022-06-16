import {Button} from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  gap?: string;
}

const ButtonBase: React.FC<ButtonProps> = ({children, size, gap}) => {
  return (
    <Button bg="gray.300" color="#5B86E5" gap={gap} size={size}>
      {children}
    </Button>
  );
};

export default ButtonBase;
