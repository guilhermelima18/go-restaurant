import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { CREATE_FOOD, DELETE_FOOD, EDIT_FOOD } from "../services/api";
import { AddProductProps, EditProductProps } from "../types/Product";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  addProduct: (addProductParams: AddProductProps) => Promise<void>;
  editProduct: (editProductParams: EditProductProps) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export function ProductProvider({ children }: ProductProviderProps) {
  const addProduct = async ({ addProductParams }: AddProductProps) => {
    try {
      await CREATE_FOOD(addProductParams);
    } catch (err) {
      toast.error("Erro ao adicionar um produto.");
    }
  };

  const editProduct = async ({ editProductParams }: EditProductProps) => {
    try {
      await EDIT_FOOD(editProductParams);
    } catch (err) {
      toast.error("Erro ao editar o produto.");
    }
  };

  const removeProduct = async (id: number) => {
    try {
      await DELETE_FOOD(id);
    } catch (err) {
      toast.error("Erro ao deletar o produto.");
    }
  };

  return (
    <ProductContext.Provider value={{ addProduct, editProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = (): ProductContextData => useContext(ProductContext);
