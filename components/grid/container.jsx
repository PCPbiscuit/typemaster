import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  /* padding-right: 1.5rem;
  padding-left: 1.5rem; */
  @media (min-width: 768px) {
    width: 890px;
  }
  @media (min-width: 992px) {
    width: 940px;
  }
  @media (min-width: 1440px) {
    width: 1108px;
  }
`;

const Container = props => (
  <StyledContainer id={props.id}>{props.children}</StyledContainer>
);

Container.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
