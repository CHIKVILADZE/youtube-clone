import React, { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../utils/API";
import Card from "./Card";

const Container = styled.div`
  flex: 2;
`;

export default function Reccomendations({ tags }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await API.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} type="sm" video={video} />
      ))}
    </Container>
  );
}
