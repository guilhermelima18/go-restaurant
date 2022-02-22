import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChangedFoods } from "../../contexts/GlobalContext";
import { useProduct } from "../../hooks/useProduct";
import { toast } from "react-toastify";
import { AiFillPlusSquare } from "react-icons/ai";
import Form from "../Form";
import InputGroup from "../InputGroup";
import NewPlateButton from "../NewPlateButton";
import styles from "../EditProductModal/styles.module.css";

interface AddProductModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddProductModal = ({
  modalIsOpen,
  setModalIsOpen,
}: AddProductModalProps) => {
  const { setHasChanged } = useChangedFoods();
  const { addProduct } = useProduct();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: any) => {
    setHasChanged(false);
    event.preventDefault();

    const addProductParams = {
      name,
      image,
      price,
      description,
      available: true,
    };

    await addProduct({ addProductParams });

    toast.success("Produto adicionado com sucesso.");

    setHasChanged(true);
    setModalIsOpen(false);
    navigate("/");
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
            onChange={(event) => setName(event.target.value)}
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
