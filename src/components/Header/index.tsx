import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
