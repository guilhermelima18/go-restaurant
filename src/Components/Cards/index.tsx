import { useEffect, useState } from "react";
import api from "../../services/api";
import { useChangedFoods } from "../../store/GlobalContext";
import Card from "./Card";
import { CardsContainer, BoxFoodsNotFoundContainer } from "./styles";

interface FoodsProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
  priceFormatted: number;
}

const BoxFoodsNotFound = () => {
  return (
    <BoxFoodsNotFoundContainer>
      <h1>Foods not found!</h1>
    </BoxFoodsNotFoundContainer>
  );
};

const Cards = () => {
  const { hasChanged } = useChangedFoods();
  const [foods, setFoods] = useState<FoodsProps[]>([]);

  useEffect(() => {
    const getFoods = async () => {
      const response = await api.get("/foods");

      if (response) {
        if (response.status === 200 && response.data) {
          const foodsFormatted = response.data.map((food: FoodsProps) => ({
            ...food,
            priceFormatted: Number(food.price),
          }));

          setFoods(foodsFormatted);
        }
      }
    };

    getFoods();
  }, [hasChanged]);

  return (
    <>
      {foods.length === 0 ? (
        <BoxFoodsNotFound />
      ) : (
        <CardsContainer>
          <Card foods={foods} />
        </CardsContainer>
      )}
    </>
  );
};

export default Cards;
