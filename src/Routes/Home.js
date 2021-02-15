import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import { Poster } from "Components/Poster";
import TitlePut from "Components/TitlePut";
import { moviesApi } from "api";

const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
`;

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesApi = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await moviesApi.upcoming();
        const {
          data: { results: popular },
        } = await moviesApi.popular();
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMoviesApi();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Section title="Now Playing">
        {nowPlaying.map((movie) => (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date && movie.release_date.substring(0, 4)}
            isMovie={true}
          />
        ))}
      </Section>
      <Section title="Upcoming">
        {upcoming.map((movie) => (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date && movie.release_date.substring(0, 4)}
            isMovie={true}
          />
        ))}
      </Section>
      <Section title="Popular">
        {popular.map((movie) => (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date && movie.release_date.substring(0, 4)}
            isMovie={true}
          />
        ))}
      </Section>
      <TitlePut title="Movies | Movistagram" />
    </Container>
  );
};

export default Home;
