import { useProduct } from "../../../hooks/useProduct";
import { ButtonPaginationContainer, Button } from "./styles";

export const ButtonPagination = ({ isActive = true }) => {
  const { pageCurrent, setPageCurrent, totalPages } = useProduct();

  function nextPage() {
    setPageCurrent(pageCurrent + 1);
  }

  if (totalPages[0] === "") {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  return (
    <ButtonPaginationContainer>
      <Button
        style={
          isActive
            ? { opacity: "0.6", cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
      >
        {pageCurrent}
      </Button>
      <Button onClick={nextPage}>{pageCurrent + 1}</Button>
    </ButtonPaginationContainer>
  );
};
