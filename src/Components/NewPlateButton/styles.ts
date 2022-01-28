import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--button-background);
  width: 200px;
  height: 55px;
  border: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: 400ms;
  margin-top: 2rem;

  &:hover {
    background-color: var(--button-background-hover);
  }
`;
