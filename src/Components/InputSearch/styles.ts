import styled from "styled-components";

export const InputSearchContainer = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(200, 200, 200, 0.7);
    border-radius: 7px;
    padding: 0 1rem;

    input[type="search"] {
      width: 100%;
      height: 50px;
      outline: none;
      border: 0;
      color: #333;
      padding: 0 1rem;
      font-size: 1rem;
      font-weight: bold;

      &::placeholder {
        color: #333;
        opacity: 0.7;
      }
    }

    &:focus-within {
      border: 3px solid var(--header-background);
    }
  }
`;
