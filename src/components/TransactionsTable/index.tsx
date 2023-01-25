import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

const TransactionsTable = () => {
  useEffect(() => {
    async function getTransactions() {
      const transactions = await api.get("/transactions");
      console.log(transactions);
    }

    getTransactions();
  });

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.76</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$12.76</td>
            <td>Casa</td>
            <td>23/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
