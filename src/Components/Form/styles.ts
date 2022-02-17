import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: var(--card-background);
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;

  animation: var(--animationModal) 2s;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: #000;
  }
`;
