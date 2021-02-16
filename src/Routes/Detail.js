import Loader from "Components/Loader";
import styled from "styled-components";
import { moviesApi, tvApi } from "api";
import React, { useState, useEffect } from "react";
import TitlePut from "Components/TitlePut";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import Section from "Components/Section";
import { PosterToCollection, PosterSeason } from "Components/Poster";

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
  height: 100%;
  overflow-y: scroll;
  margin-left: 10px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
`;
const ImdbImg = styled.span`
  background-image: url("http://img4.wikia.nocookie.net/__cb20130124112826/logopedia/images/8/8e/IMDB.png");
  background-size: cover;
  background-position: center center;
  width: 42px;
  height: 20px;
  display: inline-block;
  border-radius: 5px;
  :hover {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
`;
const Divider = styled.span`
  margin: 0px 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;
  width: 100%;
  margin-bottom: 20px;
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
const Tab = styled.div`
  margin-bottom: 20px;
`;
const TabTitle = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 25px;
  margin-top: 30px;
`;
const Videos = styled.div`
  display: flexbox;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SReactPlayer = styled(ReactPlayer)`
  margin-right: 10px;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`;

const ProductionImg = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 30px;
  margin-right: 10px;
`;
const CollectionTab = styled.div`
  display: flex;
`;
const CollectionPoster = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 120px;
  height: 180px;
  border-radius: 10px;
  margin-right: 20px;
  :hover {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Detail = (props) => {
  const {
    location: { pathname },
  } = props;

  const [result, setResult] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMovie = pathname.includes("/movie/");

  useEffect(() => {
    const getDetail = async () => {
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = props;
      const parsedId = parseInt(id);

      if (isNaN(parsedId)) {
        return push("/");
      }

      try {
        if (isMovie) {
          const { data: result } = await moviesApi.movieDetail(parsedId);
          const {
            data: { results: videos },
          } = await moviesApi.getVideos(parsedId);
          setResult(result);
          setVideos(videos);
        } else {
          const { data: result } = await tvApi.showDetail(parsedId);
          const {
            data: { results: videos },
          } = await tvApi.getVideos(parsedId);
          setResult(result);
          setVideos(videos);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getDetail();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : "https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"
          }
        />
        <Data>
          <Title>
            {result.title ? result.title : result.name}
            {result.production_companies &&
              result.production_companies.length > 0 &&
              result.production_companies.map(
                (company, index) =>
                  company.logo_path && (
                    <ProductionImg
                      key={index}
                      bgImage={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    />
                  )
              )}
          </Title>
          <ItemContainer>
            {(result.release_date || result.first_air_date) && (
              <>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>#</Divider>
              </>
            )}
            {(result.runtime || result.episode_run_time) && (
              <>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time}{" "}
                  min
                </Item>
                <Divider>#</Divider>
              </>
            )}
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>#</Divider>
            {isMovie && (
              <Item>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                >
                  <ImdbImg />
                </a>
              </Item>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {videos && videos.length > 0 && (
            <Tab>
              <TabTitle>Traillers</TabTitle>
              <Videos>
                {videos.map((video, index) => (
                  <SReactPlayer
                    key={index}
                    url={`https://www.youtube.com/watch?v=${video.key}`}
                    controls
                    width="480px"
                    height="320px"
                  />
                ))}
              </Videos>
            </Tab>
          )}
          {result.seasons && result.seasons.length > 0 && (
            <Section title="Seasons">
              {result.seasons.map((season, index) => (
                <PosterSeason
                  key={index}
                  title={season.name}
                  year={season.air_date && season.air_date.substring(0, 4)}
                  imageUrl={season.poster_path}
                />
              ))}
            </Section>
          )}
          {result.belongs_to_collection && (
            <Section title="Collection">
              <PosterToCollection
                id={result.belongs_to_collection.id}
                key={result.belongs_to_collection.id}
                title={result.belongs_to_collection.name}
                imageUrl={result.belongs_to_collection.poster_path}
              />
            </Section>
          )}
        </Data>
      </Content>
      <TitlePut
        title={
          result.title
            ? (document.title = result.title)
            : (document.title = result.name)
        }
      ></TitlePut>
    </Container>
  );
};

export default Detail;
