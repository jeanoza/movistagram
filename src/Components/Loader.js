import React from "react";
import styled from "styled-components";
import TitlePut from "Components/TitlePut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      <FontAwesomeIcon icon={faSpinner} spin={true} />
    </span>
    <TitlePut title="Loading..." />
  </Container>
);
