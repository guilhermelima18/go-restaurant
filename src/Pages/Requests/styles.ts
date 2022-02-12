import styled from "styled-components";

export const MainContent = styled.main`
  background-color: #f0f2f5;
  width: 100%;
  margin-top: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 7px;
  padding: 1.2rem;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  padding: 1rem 0;
  text-align: center;

  thead tr th {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
  }

  tbody tr td {
    width: 200px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding: 1rem 0;

    img {
      width: 150px;
      border-radius: 10px;
    }
  }
`;
