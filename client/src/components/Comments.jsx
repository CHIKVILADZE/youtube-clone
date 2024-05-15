import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: "center";
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export default function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://media.istockphoto.com/id/1137371900/vector/english-bulldog-wearing-sunglasses-isolated-outlined-vector-illustration.jpg?s=612x612&w=0&k=20&c=OMvkioGZ81HmCnxJ9IAYUBbJOx-WQz60RK9NoVQIXP4=" />
        <Input placeholder="Add a comment ..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}
