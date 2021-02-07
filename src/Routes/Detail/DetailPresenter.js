import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading, isMovie }) => null;

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};
export default DetailPresenter;
