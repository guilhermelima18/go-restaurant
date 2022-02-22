import { InputHTMLAttributes } from "react";
import { InputGroupContainer } from "./styles";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  labelText?: string;
  typeInput: string;
  nameInput?: string;
  placeholderInput?: string;
  valueInput?: string;
  onChangeInput?: () => void;
}

const InputGroup = ({
  width,
  labelText,
  typeInput,
  nameInput,
  placeholderInput,
  valueInput,
  onChangeInput,
  ...rest
}: InputGroupProps) => {
  return (
    <InputGroupContainer>
      <label htmlFor={nameInput}>{labelText}</label>
      <input
        type={typeInput}
        name={nameInput}
        placeholder={placeholderInput}
        value={valueInput}
        onChange={onChangeInput}
        style={{ width: `${width}` }}
        {...rest}
      />
    </InputGroupContainer>
  );
};

export default InputGroup;
