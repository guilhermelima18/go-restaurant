/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import { useChangedFoods } from "../../contexts/GlobalContext";
import Card from "./Card";
import { Pagination } from "../Pagination";
import { CardsContainer, BoxFoodsNotFoundContainer } from "./styles";

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
          {foods.length >= 6 && <Pagination />}
        </>
      )}
    </>
  );
};

export default Cards;
