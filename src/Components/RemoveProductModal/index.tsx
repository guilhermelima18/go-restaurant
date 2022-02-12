import { Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useChangedFoods } from "../../store/GlobalContext";
import { RiErrorWarningLine } from "react-icons/ri";
import api from "../../services/api";
import { ModalContainer, MainModal, ButtonClose } from "./styles";

interface RemoveProductModalProps {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RemoveProductModal = ({ setModalIsOpen }: RemoveProductModalProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setHasChanged } = useChangedFoods();

  async function removeProduct(id: number) {
    if (id) {
      try {
        const response = await api.delete(`/foods/${id}`);

        if (response) {
          setHasChanged(true);
          navigate("/");
        }
      } catch (err) {
        toast.error("Ocorreu um erro ao deletar o produto " + err);
      }
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
          <button
            onClick={() => {
              removeProduct(Number(id));
              setModalIsOpen(false);
            }}
          >
            Sim
          </button>
          <button>Não</button>
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
