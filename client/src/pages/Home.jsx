import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid red;
`;

export default function Home() {
  return <Container>Hello</Container>;
}
