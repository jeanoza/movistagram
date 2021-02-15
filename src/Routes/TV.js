import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import { Poster } from "Components/Poster";
import TitlePut from "Components/TitlePut";
import { tvApi } from "api";

const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 20px;
`;

const TV = () => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTvApi = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setTopRated(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
    } catch (e) {
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTvApi();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Section title="Top rated">
        {topRated.map((show) => (
          <Poster
            key={show.id}
            id={show.id}
            title={show.name}
            imageUrl={show.poster_path}
            rating={show.vote_average}
            year={show.first_air_date && show.first_air_date.substring(0, 4)}
            isMovie={false}
          />
        ))}
      </Section>
      <Section title="Popular">
        {popular.map((show) => (
          <Poster
            key={show.id}
            id={show.id}
            title={show.name}
            imageUrl={show.poster_path}
            rating={show.vote_average}
            year={show.first_air_date && show.first_air_date.substring(0, 4)}
            isMovie={false}
          />
        ))}
      </Section>
      <Section title="On air Today">
        {airingToday.map((show) => (
          <Poster
            key={show.id}
            id={show.id}
            title={show.name}
            imageUrl={show.poster_path}
            rating={show.vote_average}
            year={show.first_air_date && show.first_air_date.substring(0, 4)}
            isMovie={false}
          />
        ))}
      </Section>
      <TitlePut title="TV Shows | Movistagram" />
    </Container>
  );
};

export default TV;
