import styled from 'styled-components';
import Header from 'components/Header.jsx';
// import Footer from 'components/Footer.jsx'

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  font-color: #7b8bad;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  position: fixed;
  bottom: 40px;
`;

const Footer = props => (
  <StyledFooter>Typemaster 2021 | All Rights Reserved</StyledFooter>
);

export default Footer;
