import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import { GlobalStyle } from "../styles/GlobalStyle";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit-product/:id" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
