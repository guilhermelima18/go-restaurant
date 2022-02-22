import { FormHTMLAttributes, ReactNode } from "react";
import { FormContainer } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  text: string;
  children: ReactNode;
}

const Form = ({ text, children, ...rest }: FormProps) => {
  return (
    <FormContainer {...rest}>
      <h1>{text}</h1>
      {children}
    </FormContainer>
  );
};

export default Form;
