import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;
  border?: string;
  color?: string;
}

const Button = ({ children, bgColor, border, color, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled
      style={{
        backgroundColor: `${bgColor}`,
        border: `${border}`,
        color: `${color}`,
      }}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
