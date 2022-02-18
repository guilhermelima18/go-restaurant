import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  CREATE_FOOD,
  DELETE_FOOD,
  EDIT_FOOD,
  GET_FOODS,
} from "../services/api";
import {
  FoodsProps,
  AddProductProps,
  EditProductProps,
} from "../types/Product";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  getProduct: () => Promise<void>;
  addProduct: (addProductParams: AddProductProps) => Promise<void>;
  editProduct: (editProductParams: EditProductProps) => Promise<void>;
  removeProduct: (id: number) => Promise<void>;
  pageCurrent: number;
  setPageCurrent: React.Dispatch<SetStateAction<number>>;
  foods: FoodsProps[];
  totalPages: string[];
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export function ProductProvider({ children }: ProductProviderProps) {
  const [foods, setFoods] = useState<FoodsProps[]>([]);
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<string[]>([]);

  const getProduct = async () => {
    try {
      const response = await GET_FOODS(pageCurrent);

      const { link } = response.headers;

      const numberPages = link.split(",");

      setTotalPages([...numberPages]);

      if (response) {
        if (response.status === 200 && response.data) {
          const foodsFormatted = response.data.map((food: FoodsProps) => ({
            ...food,
            priceFormatted: Number(food.price),
          }));

          setFoods(foodsFormatted);
        }
      }
    } catch (err) {
      toast.error("Erro ao buscar os produtos.");
    }
  };

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
    <ProductContext.Provider
      value={{
        getProduct,
        addProduct,
        editProduct,
        removeProduct,
        pageCurrent,
        setPageCurrent,
        foods,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = (): ProductContextData => useContext(ProductContext);
