import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../store/CartContext";
import { AiOutlineEdit } from "react-icons/ai";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { formatPrice } from "../../../utils/format";
import Button from "../../Button";
import EditProductModal from "../../EditProductModal";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleAddProduct(id: number) {
    addProduct(id);
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
                <strong>{formatPrice(priceFormatted)}</strong>
              </h4>
            </CardContent>
            <CardFooter>
              <div>
                <Button
                  onClick={() => {
                    navigate(`/edit-product/${id}`);
                    setModalIsOpen(true);
                  }}
                >
                  <AiOutlineEdit fontSize={20} />
                </Button>
                <Button>
                  <IoIosRemoveCircleOutline fontSize={20} />
                </Button>
                <Button onClick={() => handleAddProduct(id)}>
                  <IoIosAddCircleOutline fontSize={20} />
                </Button>
              </div>
              <span style={{ color: available ? "#39B100" : "#C72828" }}>
                {available ? "Disponível" : "Indisponível"}
              </span>
            </CardFooter>
          </CardContainer>
        )
      )}
      <EditProductModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
};

export default Card;
