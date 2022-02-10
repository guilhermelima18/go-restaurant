import Layout from "../../components/Layout";
import { useCart } from "../../store/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { MainContent, TableContainer } from "./styles";
import { formatPrice } from "../../utils/format";

const Requests = () => {
  const { cart } = useCart();

  const totalOrder = cart.reduce((acc, item) => {
    return (acc += Number(item.price * item.quantity));
  }, 0);

  return (
    <Layout>
      <MainContent>
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
                  <FaTrashAlt fontSize={24} color="red" />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
        <footer>
          <button>Finalizar pedido</button>
          <span>
            Total: <strong>{formatPrice(totalOrder)}</strong>
          </span>
        </footer>
      </MainContent>
    </Layout>
  );
};

export default Requests;
