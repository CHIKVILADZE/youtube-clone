import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  border-radius: 5px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Text = styled.div`
  border: 2px solid red;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export default function Card() {
  return (
    <Container>
      <Img src="https://static01.nyt.com/images/2021/06/14/business/13bizsky-ontech-print/08OnTech-YouTube-videoSixteenByNineJumbo1600.jpg" />
      <Details>
        <ChannelImg src="https://media.istockphoto.com/id/1137371900/vector/english-bulldog-wearing-sunglasses-isolated-outlined-vector-illustration.jpg?s=612x612&w=0&k=20&c=OMvkioGZ81HmCnxJ9IAYUBbJOx-WQz60RK9NoVQIXP4=" />
        <Text>
          <Title>Test Video</Title>
          <ChannelName>Dev</ChannelName>
          <Info>435,454 views • 1 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
}
