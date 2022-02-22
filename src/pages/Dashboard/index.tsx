import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import Cards from "../../components/Cards";
import { InputSearch } from "../../components/InputSearch";
import Layout from "../../components/Layout";
import { TextToUpper } from "../../utils/TextToUpper";

const Dashboard = () => {
  const { searchProduct } = useProduct();
  const [foodSearch, setFoodSearch] = useState("");

  async function handleOnSearchFoods(event: any) {
    if (event.key === "Enter") {
      const capitalText = TextToUpper(foodSearch);
      await searchProduct(capitalText);

      setFoodSearch("");
    }
  }

  return (
    <Layout>
      <InputSearch
        placeholder="Busque por uma pizza"
        value={foodSearch}
        onChange={(e) => setFoodSearch(e.target.value)}
        onKeyPress={handleOnSearchFoods}
      />
      <Cards />
    </Layout>
  );
};

export default Dashboard;
