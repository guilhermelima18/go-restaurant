import { AiOutlineEdit } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import pizzaImg from "../../../Assets/pizza01.jpg";
import Button from "../../Button";
import { CardContainer, CardContent, CardFooter } from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <img src={pizzaImg} alt="Pizza" />
      <CardContent>
        <h2>Ao Molho</h2>
        <p>
          Macarrão ao molho branco, fughi e<br />
          cheiro verde das montanhas.
        </p>
        <h4>
          R$ <strong>19,90</strong>
        </h4>
      </CardContent>
      <CardFooter>
        <div>
          <Button>
            <AiOutlineEdit fontSize={20} />
          </Button>
          <Button>
            <IoIosRemoveCircleOutline fontSize={20} />
          </Button>
        </div>
        <span>Disponível</span>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
