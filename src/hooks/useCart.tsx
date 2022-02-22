import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GET_FOOD } from "../services/api";
import { AddFoodToCart } from "../types/Cart";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: AddFoodToCart[];
  setCart: React.Dispatch<SetStateAction<AddFoodToCart[]>>;
  addProduct: (id: number) => Promise<void>;
  removeProduct: (id: number) => void;
  finalizeOrder: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<AddFoodToCart[]>(() => {
    const getStorage = localStorage.getItem("@go-restaurant:pizzas");

    if (getStorage) {
      return JSON.parse(getStorage);
    }

    return [];
  });

  const addProduct = async (id: number) => {
    try {
      const product = [...cart];

      const productExists = product.find((item) => item.id === id);

      if (productExists) {
        productExists.quantity += 1;
      } else {
        const response = await GET_FOOD(String(id));

        const newProduct = {
          ...response.data,
          quantity: 1,
        };
        product.push(newProduct);
      }

      setCart(product);

      localStorage.setItem("@go-restaurant:pizzas", JSON.stringify(product));
    } catch (err) {
      toast.error("Erro na remoção do produto " + err);
    }
  };

  const removeProduct = (id: number) => {
    try {
      const removeToCart = cart.findIndex((item) => item.id === id);

      cart.splice(removeToCart, 1);

      localStorage.setItem("@go-restaurant:pizzas", JSON.stringify(cart));

      navigate("/requests");
    } catch (err) {
      toast.error("Erro na remoção do produto " + err);
    }
  };

  function finalizeOrder() {
    localStorage.removeItem("@go-restaurant:pizzas");
    window.location.reload();
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProduct, removeProduct, finalizeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextData => useContext(CartContext);
