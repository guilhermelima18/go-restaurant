import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChangedFoods } from "../../contexts/GlobalContext";
import { useProduct } from "../../hooks/useProduct";
import { toast } from "react-toastify";
import { AiOutlineEdit } from "react-icons/ai";
import { GET_FOOD } from "../../services/api";
import InputGroup from "../InputGroup";
import NewPlateButton from "../NewPlateButton";
import Form from "../Form";
import styles from "./styles.module.css";

interface EditProductModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const EditProductModal = ({
  modalIsOpen,
  setModalIsOpen,
}: EditProductModalProps) => {
  const { id } = useParams();
  const { editProduct } = useProduct();
  const { setHasChanged } = useChangedFoods();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    available: true,
    image: "",
  });

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        const response = await GET_FOOD(id);

        if (response) {
          if (response.status === 200 && response.data) {
            setForm({
              name: response.data.name,
              description: response.data.description,
              price: response.data.price,
              available: true,
              image: response.data.image,
            });
          }
        }
      };

      getProduct();
    }
  }, [id]);

  const handleSubmit = async (event: any) => {
    setHasChanged(false);
    event.preventDefault();

    const editProductParams = {
      id,
      ...form,
    };

    await editProduct({ editProductParams });

    toast.success("Produto editado com sucesso.");

    setHasChanged(true);
    setModalIsOpen(false);
    navigate("/");
  };

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (!modalIsOpen) return null;

  return (
    <div className={styles.modalContainer}>
      <Form text="Editar Prato" onSubmit={handleSubmit}>
        <InputGroup
          typeInput="text"
          labelText="URL da Imagem"
          nameInput="image"
          placeholderInput="Cole o link da URL aqui"
          value={form.image}
          onChange={(event) => handleChange(event)}
        />
        <div className={styles.formGroup}>
          <InputGroup
            typeInput="text"
            labelText="Nome do Prato"
            nameInput="name"
            placeholderInput="Ex: Modal Italiana"
            value={form.name}
            onChange={(event) => handleChange(event)}
          />
          <InputGroup
            typeInput="number"
            labelText="Preço"
            nameInput="price"
            placeholderInput="R$"
            step="0.01"
            value={form.price}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <InputGroup
          typeInput="text"
          labelText="Descrição do prato"
          nameInput="description"
          value={form.description}
          onChange={(event) => handleChange(event)}
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
          Editar
          <AiOutlineEdit fontSize={26} />
        </NewPlateButton>
      </Form>
    </div>
  );
};

export default EditProductModal;
