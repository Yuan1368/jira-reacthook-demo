import Home from "./page/home/Home";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { layout } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <HeaderLeft>
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

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.main`
  grid-area: main;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div``;
