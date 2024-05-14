import { createGlobalStyle } from "styled-components";

import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Radio Canada Big", sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <GlobalStyle />

      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1>
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>{" "}
          <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
          <h1>Hello</h1>
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
