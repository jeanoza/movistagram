import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { moviesApi } from "api";
import Loader from "Components/Loader";
import TitlePut from "Components/TitlePut";
import Section from "Components/Section";
import { Poster } from "Components/Poster";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: 100%;
  width: 30%;
  height: auto;
  border-radius: 15px;
  :hover {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 10px;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;
  width: 100%;
  margin-bottom: 20px;
`;

export default ({
  match: {
    params: { id },
  },
}) => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCollection = async () => {
      try {
        const { data: collection } = await moviesApi.collection(id);
        setCollection(collection);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getCollection();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${collection.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original/${collection.poster_path}`}
        />
        <Data>
          <Title>{collection.name}</Title>
          <Overview>{collection.overview}</Overview>
          <Section title="Series">
            {collection.parts &&
              collection.parts.map((part, index) => (
                <Poster
                  key={index}
                  id={part.id}
                  imageUrl={part.poster_path}
                  title={part.title}
                  rating={part.vote_average}
                  year={part.release_date && part.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
          </Section>
        </Data>
      </Content>
      <TitlePut title={collection.name} />
    </Container>
  );
};
