import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import API from "../utils/API";

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

const ChannelImage = styled.img`
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
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await API.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img type={type} src={video.imgURL} />
        <Details type={type}>
          <ChannelImage type={type} src={channel?.img} />{" "}
          <Text>
            <Title>{video.title}</Title>
            <ChannelName>{channel ? channel.name : ""}</ChannelName>{" "}
            <Info>
              {video.views} views • {format(video.createdAt)}
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
}
