import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo-go-restaurant.svg";
import {
  HeaderContainer,
  NavContainer,
  LogoContent,
  TitleContent,
  NavMenu,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoContent className="logo-content">
          <img src={logoIcon} alt="Logo Go Restaurant" />
          <TitleContent className="title-content">
            <h1>GoRestaurant</h1>
            <p>Comida italiana, sim.</p>
          </TitleContent>
        </LogoContent>
        <NavMenu>
          <Link to="/">Home</Link>
          <Link to="/requests">Pedidos</Link>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
