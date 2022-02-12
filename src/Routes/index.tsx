import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import Requests from "../pages/Requests";
import { CartProvider } from "../store/CartContext";
import { ChangedFoods } from "../store/GlobalContext";
import { GlobalStyle } from "../styles/GlobalStyle";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <CartProvider>
        <ChangedFoods>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-product" element={<Dashboard />} />
            <Route path="/edit-product/:id" element={<Dashboard />} />
            <Route path="/remove-product/:id" element={<Dashboard />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
          <ToastContainer autoClose={3000} />
        </ChangedFoods>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
