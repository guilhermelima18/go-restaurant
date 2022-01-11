import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../../Services/api";
import { formatPrice } from "../../../Utils/format";
import Button from "../../Button";
import EditProductModal from "../../EditProductModal";
import { CardContainer, CardContent, CardFooter } from "./styles";

interface FoodsProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
  priceFormatted: number;
}

const Card = () => {
  const [foods, setFoods] = useState<FoodsProps[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const loadFoods = async () => {
      const response = await api.get("/foods");

      if (response) {
        if (response.status === 200) {
          const foodsFormatted = response.data.map((food: any) => ({
            ...food,
            priceFormatted: Number(food.price),
          }));
          setFoods(foodsFormatted);
        }
      }
    };

    loadFoods();
  }, []);

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
                <Button onClick={() => setModalIsOpen(true)}>
                  <Link to={`/edit-product/${id}`}>
                    <AiOutlineEdit fontSize={20} />
                  </Link>
                </Button>
                <Button>
                  <IoIosRemoveCircleOutline fontSize={20} />
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
