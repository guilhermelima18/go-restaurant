import Layout from "../../components/Layout";
import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";
import NewPlateButton from "../../components/NewPlateButton";
import { ButtonCart } from "../../components/ButtonCart";
import { FormatPrice } from "../../utils/FormatPrice";
import { MainContent, TableContainer } from "./styles";

type FoodToCartProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  available: boolean;
  price: number;
  quantity: number;
};

const Requests = () => {
  const { cart, setCart, removeProduct, finalizeOrder } = useCart();

  const totalOrder = cart.reduce((acc, item) => {
    return (acc += Number(item.price * item.quantity));
  }, 0);

  function handleDeleteProduct(id: number) {
    removeProduct(id);
  }

  async function DecrementProductCart(product: FoodToCartProps) {
    const getProductToCart = [...cart];

    const findProduct = getProductToCart.find((item) => {
      const itemReturn = item.id === product.id && {
        quantity:
          item.quantity > 1
            ? (item.quantity -= 1)
            : toast.warning("Quantidade mínima permitida."),
      };

      return itemReturn;
    });

    const productCartModified = getProductToCart.map((item) => {
      const itemReturn =
        item.id === product.id
          ? {
              ...item,
              quantity: findProduct ? findProduct.quantity : item.quantity,
            }
          : { ...item };

      return itemReturn;
    });

    localStorage.setItem(
      "@go-restaurant:pizzas",
      JSON.stringify(productCartModified)
    );

    setCart(productCartModified);
  }

  async function IncrementProductToCart(product: FoodToCartProps) {
    const getProductToCart = [...cart];

    const findProduct = getProductToCart.find((item) => {
      const itemReturn = item.id === product.id && {
        quantity: (item.quantity += 1),
      };

      return itemReturn;
    });

    const productCartModified = getProductToCart.map((item) => {
      const itemReturn =
        item.id === product.id
          ? {
              ...item,
              quantity: findProduct ? findProduct.quantity : item.quantity,
            }
          : { ...item };

      return itemReturn;
    });

    localStorage.setItem(
      "@go-restaurant:pizzas",
      JSON.stringify(productCartModified)
    );

    setCart(productCartModified);
  }

  return (
    <Layout>
      <MainContent>
        {cart.length === 0 ? (
          <h2>Sem itens no carrinho.</h2>
        ) : (
          <>
            <TableContainer>
              <thead>
                <tr>
                  <th></th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Preço Unitário</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <ButtonCart onClick={() => DecrementProductCart(product)}>
                        -
                      </ButtonCart>
                      {product.quantity}
                      <ButtonCart
                        onClick={() => IncrementProductToCart(product)}
                      >
                        +
                      </ButtonCart>
                    </td>
                    <td>{FormatPrice(product.price)}</td>
                    <td>
                      <Button
                        bgColor="#C72828"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <FaTrashAlt fontSize={16} color="white" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
            <footer>
              <NewPlateButton
                onClick={() => {
                  finalizeOrder();
                }}
              >
                Finalizar pedido
              </NewPlateButton>
              <span>
                Total: <strong>{FormatPrice(totalOrder)}</strong>
              </span>
            </footer>
          </>
        )}
      </MainContent>
    </Layout>
  );
};

export default Requests;
