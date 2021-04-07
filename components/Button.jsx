import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.primary ? '#f16718' : '#e8eff2')};
  font-weight: 700;
  line-height: 26px;
  width: 175px;
  color: ${props => (props.primary ? '#FFFFFF' : '#162542')};
  padding: 16px 26px;
  border-radius: 3px;
  text-transform: uppercase;
  transition: 0.25s ease;
  border-radius: 8px;
  font-family: 'Barlow' !important;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${props => (props.primary ? '#ff9b62' : '#162542')};
    color: #fff;
  }
`;

const Button = props => <StyledButton {...props}>pre-order now</StyledButton>;

export default Button;
