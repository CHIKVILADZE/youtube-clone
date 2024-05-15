import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

export default function Comment() {
  return (
    <Container>
      {" "}
      <Avatar src="https://media.istockphoto.com/id/1137371900/vector/english-bulldog-wearing-sunglasses-isolated-outlined-vector-illustration.jpg?s=612x612&w=0&k=20&c=OMvkioGZ81HmCnxJ9IAYUBbJOx-WQz60RK9NoVQIXP4=" />
      <Details>
        <Name>
          Giorgi Chikviladze
          <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          maxime necessitatibus aspernatur eaque nisi modi doloribus placeat
          explicabo sequi ipsa expedita beatae quae, minima sint harum. Ullam
          expedita doloribus commodi!
        </Text>
      </Details>
    </Container>
  );
}
