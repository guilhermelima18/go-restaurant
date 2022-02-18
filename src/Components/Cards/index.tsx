/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import Card from "./Card";
import { Pagination } from "../Pagination";
import { CardsContainer, BoxFoodsNotFoundContainer } from "./styles";
import { useChangedFoods } from "../../contexts/GlobalContext";

const BoxFoodsNotFound = () => {
  return (
    <BoxFoodsNotFoundContainer>
      <h1>Ops... no more Pizzas!</h1>
    </BoxFoodsNotFoundContainer>
  );
};

const Cards = () => {
  const { getProduct, foods, pageCurrent } = useProduct();
  const { hasChanged } = useChangedFoods();

  async function getFoods() {
    await getProduct();
  }

  useEffect(() => {
    if (pageCurrent) {
      getFoods();
    }
  }, [pageCurrent, hasChanged]);

  return (
    <>
      {foods.length === 0 ? (
        <BoxFoodsNotFound />
      ) : (
        <>
          <CardsContainer>
            <Card foods={foods} />
          </CardsContainer>
          <Pagination />
        </>
      )}
    </>
  );
};

export default Cards;
