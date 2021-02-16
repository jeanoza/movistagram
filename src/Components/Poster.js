import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;
const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 5px;
  background-position: center center;
  transition: opacity 0.1s ease-in-out;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
              : "https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"
          }
        />
        {rating ? (
          <Rating>
            <span role="img" aria-label="rating">
              ⭐
            </span>{" "}
            {rating}/10
          </Rating>
        ) : null}
      </ImageContainer>
      <Title>
        {title.length > 17 ? `${title.substring(0, 17)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export const PosterToCollection = ({ id, imageUrl, title, year }) => (
  <Link to={`/collection/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
              : "https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"
          }
        />
      </ImageContainer>
      <Title>
        {title.length > 17 ? `${title.substring(0, 17)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

export const PosterSeason = ({ imageUrl, title, year }) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300/${imageUrl}`
            : "https://www.lakeshorechamber.org/wp-content/uploads/2018/07/Photo-Not-Available.png"
        }
      />
    </ImageContainer>
    <Title>{title.length > 17 ? `${title.substring(0, 17)}...` : title}</Title>
    <Year>{year}</Year>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};
