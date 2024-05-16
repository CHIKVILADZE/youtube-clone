import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: ${({ type }) => type !== "sm" && "360px"};
  margin-bottom: ${({ type }) => (type === "sm" ? "20px" : "45px")};
  cursor: pointer;
  display: ${({ type }) => type === "sm" && "flex"};
  gap: 5px;
`;

const Img = styled.img`
  width: 100%;
  height: ${({ type }) => (type === "sm" ? "130px" : "202px")};
  background-color: #999;
  border-radius: 5px;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${({ type }) => type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${({ type }) => type === "sm" && "none"};
`;

const Text = styled.div``;

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

export default function Card({ type, video }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImg
            type={type}
            src="https://media.istockphoto.com/id/1137371900/vector/english-bulldog-wearing-sunglasses-isolated-outlined-vector-illustration.jpg?s=612x612&w=0&k=20&c=OMvkioGZ81HmCnxJ9IAYUBbJOx-WQz60RK9NoVQIXP4="
          />
          <Text>
            <Title>{video.title}</Title>
            <ChannelName>Chikvila</ChannelName>
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
}
