import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
