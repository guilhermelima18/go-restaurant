import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { toast } from "react-toastify";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { FormatPrice } from "../../../utils/FormatPrice";
import Button from "../../Button";
import EditProductModal from "../../EditProductModal";
import RemoveProductModal from "../../RemoveProductModal";
import { CardContainer, CardContent, CardFooter } from "./styles";

interface FoodsProps {
  id: number;
  name: string;
  price?: string;
  image: string;
  description: string;
  available: boolean;
  priceFormatted: number;
}

type Foods = {
  foods: FoodsProps[];
};

const Card = ({ foods }: Foods) => {
  const { addProduct } = useCart();
  const navigate = useNavigate();
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = useState(false);

  function handleAddProduct(id: number) {
    addProduct(id);
    toast.success("Produto adicionado com sucesso!");
  }

  return (
    <>
      {foods.map(
        ({ id, name, description, image, priceFormatted, available }) => (
          <CardContainer key={id}>
            <img src={image} alt={name} />
            <CardContent>
              <h2>{name}</h2>
              <p>{description}</p>
              <h4>
                <strong>{FormatPrice(priceFormatted)}</strong>
              </h4>
            </CardContent>
            <CardFooter>
              <div>
                <Button
                  bgColor="blue"
                  onClick={() => {
                    navigate(`/edit-product/${id}`);
                    setModalEditIsOpen(true);
                  }}
                >
                  <AiOutlineEdit fontSize={20} color="white" />
                </Button>
                <Button
                  bgColor="#C72828"
                  onClick={() => {
                    navigate(`/remove-product/${id}`);
                    setModalRemoveIsOpen(true);
                  }}
                >
                  <IoIosRemoveCircleOutline fontSize={20} color="white" />
                </Button>
                <Button bgColor="green" onClick={() => handleAddProduct(id)}>
                  <BsCartPlus fontSize={20} color="white" />
                </Button>
              </div>
              <span style={{ color: available ? "#39B100" : "#C72828" }}>
                {available ? "Disponível" : "Indisponível"}
              </span>
            </CardFooter>
          </CardContainer>
        )
      )}
      {modalEditIsOpen && (
        <EditProductModal
          modalIsOpen={modalEditIsOpen}
          setModalIsOpen={setModalEditIsOpen}
        />
      )}
      {modalRemoveIsOpen && (
        <RemoveProductModal setModalIsOpen={setModalRemoveIsOpen} />
      )}
    </>
  );
};

export default Card;
