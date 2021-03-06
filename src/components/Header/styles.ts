import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--header-background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 70px;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;
