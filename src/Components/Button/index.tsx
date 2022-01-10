import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
