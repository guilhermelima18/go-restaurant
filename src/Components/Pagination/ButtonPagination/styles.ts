import styled from "styled-components";

export const ButtonPaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  background-color: var(--header-background);
  width: 50px;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
`;
