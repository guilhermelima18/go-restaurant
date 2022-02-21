import { useProduct } from "../../../hooks/useProduct";
import { ButtonPaginationContainer, Button } from "./styles";

export const ButtonPagination = () => {
  const { pageCurrent, setPageCurrent, totalPages } = useProduct();

  function nextPage() {
    setPageCurrent(pageCurrent + 1);
  }

  if (pageCurrent > totalPages) {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  return (
    <ButtonPaginationContainer>
      <Button
        style={
          pageCurrent
            ? { opacity: "0.6", cursor: "not-allowed" }
            : { cursor: "pointer" }
        }
      >
        {pageCurrent}
      </Button>
      {pageCurrent + 1 <= totalPages && (
        <Button onClick={nextPage}>{pageCurrent + 1}</Button>
      )}
    </ButtonPaginationContainer>
  );
};
