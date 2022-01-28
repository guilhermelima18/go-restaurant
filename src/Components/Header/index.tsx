import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo-go-restaurant.svg";
import AddProductModal from "../AddProductModal";
import NewPlateButton from "../NewPlateButton";
import {
  HeaderContainer,
  NavContainer,
  LogoContent,
  TitleContent,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <LogoContent className="logo-content">
            <img src={logoIcon} alt="Logo Go Restaurant" />
            <TitleContent className="title-content">
              <h1>GoRestaurant</h1>
              <p>Comida italiana, sim.</p>
            </TitleContent>
          </LogoContent>
          <NewPlateButton
            onClick={() => {
              navigate("/create-product");
              setModalIsOpen(true);
            }}
          >
            Novo Prato
            <AiFillPlusSquare fontSize={26} />
          </NewPlateButton>
        </NavContainer>
      </HeaderContainer>
      <AddProductModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
};

export default Header;
