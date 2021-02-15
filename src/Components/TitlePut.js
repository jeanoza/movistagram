import styled from "styled-components";

const Container = styled.div`
  display: none;
`;
export default (props) => (
  <Container>
    {
      (document.title = `${
        props.title.length > 20
          ? `${props.title.substring(0, 20)}...`
          : props.title
      }`)
    }
  </Container>
);
