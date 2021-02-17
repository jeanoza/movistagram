import { moviesApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import { Poster } from "Components/Poster";
import Message from "Components/Message";
import TitlePut from "Components/TitlePut";

const Container = styled("div")`
  width: 100%;
  padding: 20px;
`;
const Form = styled("form")`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled("input")`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

const Search = ({
  match: {
    params: { searchTerm },
  },
}) => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  // const [searchTerm, setSearchTerm] = useState(word);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    searchByTerm();
  }, [searchTerm]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                yaer={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}
        {error && <Message color="#ee5253" text={error} />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text="Nothing found" color="#8395a7" />
          )}
      </>
      <TitlePut title="Search | Movistagram" />
    </Container>
  );
};
export default Search;
