import { AiFillPlusSquare } from "react-icons/ai";
import logoIcon from "../../Assets/logo-go-restaurant.svg";
import NewPlateButton from "../NewPlateButton";
import {
  HeaderContainer,
  NavContainer,
  LogoContent,
  TitleContent,
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
        <NewPlateButton type="submit">
          Novo Prato
          <AiFillPlusSquare fontSize={26} />
        </NewPlateButton>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
