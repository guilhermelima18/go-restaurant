import { Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChangedFoods } from "../../contexts/GlobalContext";
import { useProduct } from "../../hooks/useProduct";
import { toast } from "react-toastify";
import { RiErrorWarningLine } from "react-icons/ri";
import { ModalContainer, MainModal, ButtonClose } from "./styles";
import Button from "../Button";

interface RemoveProductModalProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RemoveProductModal = ({ setModalIsOpen }: RemoveProductModalProps) => {
  const { id } = useParams();
  const { removeProduct } = useProduct();
  const navigate = useNavigate();
  const { setHasChanged } = useChangedFoods();

  async function deleteProduct(id: number) {
    setHasChanged(false);

    if (id) {
      await removeProduct(id);

      toast.success("Produto deletado com sucesso.");

      setHasChanged(true);
      navigate("/");
    }
  }

  return (
    <ModalContainer>
      <MainModal>
        <header>
          <RiErrorWarningLine fontSize={46} color="white" />
        </header>
        <h1>Tem certeza que deseja deletar esse produto?</h1>
        <footer>
          <Button
            bgColor="green"
            color="white"
            onClick={() => {
              deleteProduct(Number(id));
              setModalIsOpen(false);
            }}
          >
            Sim
          </Button>
          <Button
            bgColor="transparent"
            border="2px solid rgba(200, 200, 200, 0.8)"
          >
            Não
          </Button>
        </footer>
        <ButtonClose
          type="submit"
          onClick={() => {
            setModalIsOpen(false);
            navigate("/");
          }}
        >
          X
        </ButtonClose>
      </MainModal>
    </ModalContainer>
  );
};

export default RemoveProductModal;
