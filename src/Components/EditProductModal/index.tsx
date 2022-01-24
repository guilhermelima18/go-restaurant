import { useCallback } from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import NewPlateButton from "../NewPlateButton";
import styles from "./styles.module.css";

interface FoodEditModalProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
  priceFormatted: number;
}

interface EditProductModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProductModal = ({
  modalIsOpen,
  setModalIsOpen,
}: EditProductModalProps) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const editProduct = async () => {
        const response = await api.get<FoodEditModalProps[]>(`/foods/${id}`);
      };

      editProduct();
    }
  }, [id]);

  const handleSubmit = useCallback(async (data) => {
    console.log(data);
  }, []);

  if (!modalIsOpen) return null;

  return (
    <div className={modalIsOpen ? styles.modalContainer : styles.modalDisabled}>
      <form onSubmit={handleSubmit}>
        <h1>Editar Prato</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="url">URL da imagem</label>
          <input type="url" name="imageUrl" placeholder="Cole o link aqui" />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome do prato</label>
            <input type="text" name="name" placeholder="Ex: Modal Italiana" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price">Preço</label>
            <input type="number" step="0.01" name="price" placeholder="R$" />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="description">Descrição do prato</label>
          <input type="text" name="description" />
        </div>
        <button
          type="submit"
          className={styles.buttonClose}
          onClick={() => {
            setModalIsOpen(false);
            navigate("/");
          }}
        >
          X
        </button>
        <NewPlateButton>Editar</NewPlateButton>
      </form>
    </div>
  );
};

export default EditProductModal;
