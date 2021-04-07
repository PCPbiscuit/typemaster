import styled from 'styled-components';
import Container from 'components/grid/container.jsx';
import TM from 'components/icons/TM.jsx';
import Button from 'components/Button.jsx';

const StyledHeader = styled.header`
  height: 58px;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  padding: 6px 4px;
  background-color: ${({ theme }) => theme.colors.orange};
  display: inline-block;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Logo>
            <TM />
          </Logo>
          <Button />
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
