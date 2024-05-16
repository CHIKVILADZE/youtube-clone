import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card.jsx";
import API from "../utils/API.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Home({ type }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await API.get(`/videos/${type}`);
      setVideos(res.data);
      console.log("videos", videos);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
}
