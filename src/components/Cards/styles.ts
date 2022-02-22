import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 2rem 0;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const BoxFoodsNotFoundContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  h1 {
    font-size: 2rem;
    color: #666;
  }
`;
