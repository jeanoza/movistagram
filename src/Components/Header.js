import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  color: rgba(255, 255, 255);
  position: fixed;
  font-size: 10px;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  background-color: rgba(20, 20, 20, 0.9);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 100px;
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

export default withRouter(({ location: { pathname } }) => (
  <Header>
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
      <Item current={pathname === "/search"}>
        <SLink to="/search">
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            spin={pathname === "/search"}
          />
        </SLink>
      </Item>
    </List>
  </Header>
));
