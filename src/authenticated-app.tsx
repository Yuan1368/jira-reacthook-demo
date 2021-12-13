import Home from "./page/home/Home";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

export const AuthenticatedApp = () => {
  const { layout } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <HeaderLeft gap={true} between={true}>
            <h3>Logo</h3>
            <h3>项目</h3>
            <h3>用户</h3>
          </HeaderLeft>
          <HeaderRight>
            <button onClick={() => layout()}>登出</button>
          </HeaderRight>
        </Header>
        <Main>
          <Home />
        </Main>
      </Container>
    </>
  );
};

/*const PageHeader = styled.header`height: 6rem`;
const Main = styled.main`height: calc(100vh - 6rem)`;*/

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
`;

const Header = styled(Row)`
  grid-area: header;
  justify-content: space-between;
`;

const Main = styled.main`
  grid-area: main;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;
