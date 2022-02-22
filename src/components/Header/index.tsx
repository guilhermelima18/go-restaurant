import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logo-go-restaurant.svg";
import AddProductModal from "../AddProductModal";
import NewPlateButton from "../NewPlateButton";
import {
  HeaderContainer,
  NavContainer,
  LogoContent,
  TitleContent,
  NavMenu,
} from "./styles";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          <NewPlateButton onClick={() => setModalIsOpen(true)}>
            Adicione um novo prato
          </NewPlateButton>
        </NavMenu>
      </NavContainer>
      {modalIsOpen && (
        <AddProductModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
