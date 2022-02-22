import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonCartStyle } from "./styles";

interface ButtonCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonCart({ children, ...rest }: ButtonCartProps) {
  return <ButtonCartStyle {...rest}>{children}</ButtonCartStyle>;
}
