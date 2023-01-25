import { useState } from "react";
import Modal from "react-modal";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";
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

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>

      <GlobalStyle />
    </>
  );
}

export default App;
