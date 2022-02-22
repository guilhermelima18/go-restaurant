import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const NewPlateButton = ({ children, ...rest }: ButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default NewPlateButton;
