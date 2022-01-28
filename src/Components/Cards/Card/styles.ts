import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--card-background);
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 8px 8px 0px 0px;
  margin: 1rem 0;

  img {
    width: 100%;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;

  h2 {
    margin-top: 1rem;
    color: var(--title-color);
  }

  p {
    color: var(--title-color);
    opacity: 0.8;
  }

  h4 {
    color: var(--button-background);
  }
`;

export const CardFooter = styled.footer`
  background-color: var(--card-footer-background);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    font-weight: bold;
    color: var(--button-background);
  }
`;
