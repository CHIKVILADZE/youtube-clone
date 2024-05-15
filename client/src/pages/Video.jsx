import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-left: 10px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  flex: 5;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Recoomendations = styled.div`
  flex: 2;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  color: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid black;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;

export default function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/B5AowmRgHV0?list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMB5AowmRgHV0"
            title="KayaKata - Massaia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>3, 523,642 views • Jun 22, 2024</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 123{" "}
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <AddTaskIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://media.istockphoto.com/id/1137371900/vector/english-bulldog-wearing-sunglasses-isolated-outlined-vector-illustration.jpg?s=612x612&w=0&k=20&c=OMvkioGZ81HmCnxJ9IAYUBbJOx-WQz60RK9NoVQIXP4=" />
            <ChannelDetail>
              <ChannelName>Chikvila Dev</ChannelName>
              <ChannelCounter>200K Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                minus porro ipsam unde autem qui et blanditiis aspernatur quod
                consectetur accusantium, ipsum eius. Fugiat natus sit suscipit
                odio earum veniam!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recoomendations>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recoomendations>
    </Container>
  );
}
