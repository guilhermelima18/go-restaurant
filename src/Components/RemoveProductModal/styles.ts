import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainModal = styled.main`
  background-color: white;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  header {
    background-color: red;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    text-align: center;
  }

  footer {
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    button {
      background-color: green;
      width: 150px;
      height: 35px;
      border: 0;
      outline: none;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
`;
