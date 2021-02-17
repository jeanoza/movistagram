import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  color: rgba(255, 255, 255);
  position: fixed;
  font-size: 8px;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  @media (max-width: 414px) {
    padding: 0px;
  }

  background-color: rgba(20, 20, 20, 0.9);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 70px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#ff0000" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  font-size: 16px;
  @media (max-width: 414px) {
    width: 90%;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;
const Input = styled.input`
  all: unset;
  width: 90%;
`;
const Title = styled.span`
  /* width: 20%; */
  font-size: 20px;
  @media (max-width: 414px) {
    width: 0%;
    display: none;
  }
`;
export default withRouter(({ location: { pathname }, history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    const initializationInput = event.target[0];
    event.preventDefault();
    history.push(`/search/${searchTerm}`);
    initializationInput.value = null;
  };
  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };
  return (
    <Header>
      <Link to="/">
        <Title>𝓜𝓸𝓿𝓲𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Title>
      </Link>
      <Form onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faSearch} size="1x" />
        <Input onChange={updateTerm} placeholder="Search movie or TV..." />
      </Form>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">
            <FontAwesomeIcon icon={faFilm} size="3x" />
          </SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">
            <FontAwesomeIcon icon={faTv} size="2x" />
          </SLink>
        </Item>
      </List>
    </Header>
  );
});
