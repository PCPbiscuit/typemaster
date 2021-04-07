import styled from 'styled-components';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 55px 0 40px 0;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
}
