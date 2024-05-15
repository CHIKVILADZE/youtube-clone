import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Container = styled.div`
  display: flex;
  gap: 24px;
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
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
      </Content>
      <Recoomendations>Recommendations</Recoomendations>
    </Container>
  );
}
