import styled from 'styled-components';
import Header from 'components/Header.jsx';
// import Footer from 'components/Footer.jsx'

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: #7b8bad;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  margin: 128px 0 40px 0;
`;

const Footer = () => (
  <StyledFooter>Typemaster 2021 | All Rights Reserved</StyledFooter>
);

export default Footer;
