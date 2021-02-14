import Loader from "Components/Loader";
import styled from "styled-components";
import { moviesApi, tvApi } from "api";
import React, { useState, useEffect } from "react";
import TitlePut from "Components/TitlePut";

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
  background-size: cover;
  background-position: center center;
  width: 30%;
  height: auto;
  border-radius: 15px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const Item = styled.span``;
const ImdbImg = styled.div`
  background-image: url("http://img4.wikia.nocookie.net/__cb20130124112826/logopedia/images/8/8e/IMDB.png");
  background-size: cover;
  background-position: center center;
  width: 40px;
  height: 16px;
  display: inline-block;
`;
const Divider = styled.span`
  margin: 0px 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;
  width: 100%;
`;

const Backdrop = styled.div`
  position: absolute;
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
const Detail = (props) => {
  const {
    location: { pathname },
  } = props;

  const [result, setResult] = useState(null);
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
          setResult(result);
        } else {
          const { data: result } = await tvApi.showDetail(parsedId);
          setResult(result);
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
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>#</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}
            </Item>
            <Divider>#</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            {isMovie && (
              <div>
                <Divider>#</Divider>
                <Item>
                  <a href={`https://www.imdb.com/title/${result.imdb_id}`}>
                    <ImdbImg />
                  </a>
                </Item>
              </div>
            )}
          </ItemContainer>
          <Overview>{result.overview}</Overview>
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
