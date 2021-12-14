import Home from "./page/home/Home";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { Button, Dropdown, Menu } from "antd";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <HeaderLeft gap={true} between={true}>
            <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
            <h3>项目</h3>
            <h3>用户</h3>
          </HeaderLeft>
          <HeaderRight>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key={"logout"}>
                    <Button type={"link"} onClick={logout}>
                      登出
                    </Button>
                  </Menu.Item>
                </Menu>
              }
            >
              <Button type={"link"} onClick={(e) => e.preventDefault()}>
                欢迎{user?.name}
              </Button>
            </Dropdown>
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
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  grid-area: header;
  justify-content: space-between;
`;

const Main = styled.main`
  grid-area: main;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;
