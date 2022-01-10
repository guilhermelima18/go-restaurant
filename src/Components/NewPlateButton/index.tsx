import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const NewPlateButton = ({ children }: ButtonProps) => {
  return <Button>{children}</Button>;
};

export default NewPlateButton;
