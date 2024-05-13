import { createGlobalStyle } from "styled-components";

import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin: 0;
  overflow: hidden;
  border: 4px solid red;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
