import { useState } from "react";
import AddProductModal from "../../components/AddProductModal";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";
import NewPlateButton from "../../components/NewPlateButton";
import { NewPlateSection } from "./styles";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout>
      <NewPlateSection>
        <NewPlateButton onClick={() => setModalIsOpen(true)}>
          Adicionar novo prato
        </NewPlateButton>
      </NewPlateSection>
      <Cards />
      {modalIsOpen && (
        <AddProductModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </Layout>
  );
};

export default Dashboard;
