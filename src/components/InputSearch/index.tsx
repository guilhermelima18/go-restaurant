import { InputHTMLAttributes } from "react";
import { RiSearchLine } from "react-icons/ri";
import { InputSearchContainer } from "./styles";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onValueChange?: () => void;
}

export const InputSearch = ({
  placeholder,
  value,
  onValueChange,
  ...rest
}: InputSearchProps) => {
  return (
    <InputSearchContainer>
      <span>
        <RiSearchLine fontSize={24} color="#333" />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={onValueChange}
          {...rest}
        />
      </span>
    </InputSearchContainer>
  );
};
