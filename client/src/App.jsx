import {
  ThemeConsumer,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

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
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1> <h1>Hello</h1> <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
