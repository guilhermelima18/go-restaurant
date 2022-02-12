import Layout from "../../components/Layout";
import { useCart } from "../../store/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { MainContent, TableContainer } from "./styles";
import { formatPrice } from "../../utils/format";
import Button from "../../components/Button";
import NewPlateButton from "../../components/NewPlateButton";

const Requests = () => {
  const { cart, removeProduct, finalizeOrder } = useCart();

  const totalOrder = cart.reduce((acc, item) => {
    return (acc += Number(item.price * item.quantity));
  }, 0);

  function handleDeleteProduct(id: number) {
    removeProduct(id);
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
                    <td>{product.quantity}</td>
                    <td>{formatPrice(product.price)}</td>
                    <td>
                      <Button
                        color="#C72828"
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
                Total: <strong>{formatPrice(totalOrder)}</strong>
              </span>
            </footer>
          </>
        )}
      </MainContent>
    </Layout>
  );
};

export default Requests;
