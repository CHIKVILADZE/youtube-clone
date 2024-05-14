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

const Text = styled.div``;

const Title = styled.h1``;

const ChannelName = styled.h2``;

const Info = styled.div``;

export default function Card() {
  return (
    <Container>
      <Img src="https://static01.nyt.com/images/2021/06/14/business/13bizsky-ontech-print/08OnTech-YouTube-videoSixteenByNineJumbo1600.jpg" />
      <Details>
        <ChannelImg src="path_to_channel_image" />
        <Text>
          <Title>Test Video</Title>
          <ChannelName>Dev</ChannelName>
          <Info>435,454 views • 1 day ago</Info>
        </Text>
      </Details>
    </Container>
  );
}
