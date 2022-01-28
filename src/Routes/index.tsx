import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import { ChangedFoods } from "../store/GlobalContext";
import { GlobalStyle } from "../styles/GlobalStyle";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ChangedFoods>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-product" element={<Dashboard />} />
          <Route path="/edit-product/:id" element={<Dashboard />} />
        </Routes>
      </ChangedFoods>
    </BrowserRouter>
  );
};

export default AppRoutes;
