import React from "react";
import styled from "styled-components";
import TitlePut from "Components/TitlePut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      <FontAwesomeIcon icon={faSpinner} spin={true} />
    </span>
    <TitlePut title="Loading..." />
  </Container>
);
