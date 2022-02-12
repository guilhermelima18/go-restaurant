import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: string;
}

const Button = ({ children, color, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled style={{ backgroundColor: `${color}` }} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
