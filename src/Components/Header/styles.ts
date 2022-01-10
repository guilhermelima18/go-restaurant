import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--header-background);
  width: 100%;
  padding: 2rem 2rem 10rem;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: white;
    font-size: 1.8rem;
  }

  p {
    color: white;
    opacity: 0.8;
    font-size: 1rem;
  }
`;
