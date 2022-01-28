import styled from "styled-components";

export const InputGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  label {
    font-size: 0.8rem;
    color: #6c6c80;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 0 1rem;
    border-radius: 8px;
    outline: none;
    border: 0;

    &:focus {
      border: 2px solid var(--button-background);
    }
  }

  & + & {
    margin-left: 10px;
  }
`;
