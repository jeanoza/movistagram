import styled from "styled-components";

const Container = styled.div`
  display: none;
`;
export default (props) => (
  <Container>{(document.title = props.title)}</Container>
);
