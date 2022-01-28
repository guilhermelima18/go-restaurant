import { Dispatch, SetStateAction, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useChangedFoods } from "../../store/GlobalContext";
import styles from "../EditProductModal/styles.module.css";
import Form from "../Form";
import InputGroup from "../InputGroup";
import NewPlateButton from "../NewPlateButton";

interface AddProductModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProductModal = ({
  modalIsOpen,
  setModalIsOpen,
}: AddProductModalProps) => {
  const { setHasChanged } = useChangedFoods();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: any) => {
    setHasChanged(false);
    event.preventDefault();

    const params = {
      name,
      image,
      price,
      description,
      available: true,
    };

    const response = await api.post("/foods", params);

    if (response) {
      if (response.status === 201) {
        setHasChanged(true);
        navigate("/");
        setModalIsOpen(false);
      }
    }
  };

  if (!modalIsOpen) return null;

  return (
    <div className={modalIsOpen ? styles.modalContainer : styles.modalDisabled}>
      <Form text="Adicionar Prato" onSubmit={handleSubmit}>
        <InputGroup
          typeInput="url"
          labelText="URL da Imagem"
          nameInput="image"
          placeholderInput="Cole o link da URL aqui"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <div className={styles.formGroup}>
          <InputGroup
            typeInput="text"
            labelText="Nome do Prato"
            nameInput="name"
            placeholderInput="Ex: Modal Italiana"
            value={name}
            onChange={(event) => setName(event?.target.value)}
          />
          <InputGroup
            typeInput="number"
            labelText="Preço"
            nameInput="price"
            placeholderInput="R$"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <InputGroup
          typeInput="text"
          labelText="Descrição do prato"
          nameInput="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
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
        <NewPlateButton>
          Adicionar
          <AiFillPlusSquare fontSize={26} />
        </NewPlateButton>
      </Form>
    </div>
  );
};

export default AddProductModal;
