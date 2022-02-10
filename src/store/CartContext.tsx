import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface AddFoodToCart {
  id: number;
  name: string;
  image: string;
  description: string;
  available: boolean;
  price: number;
  quantity: number;
}

interface CartContextData {
  cart: AddFoodToCart[];
  addProduct: (id: number) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
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
        const response = await api.get(`/foods/${id}`);

        const newProduct = {
          ...response.data,
          quantity: 1,
        };
        product.push(newProduct);
      }

      setCart(product);

      localStorage.setItem("@go-restaurant:pizzas", JSON.stringify(product));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
