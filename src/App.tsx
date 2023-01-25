import { useState } from "react";
import Modal from "react-modal";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModelOpen] =
    useState<boolean>(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
