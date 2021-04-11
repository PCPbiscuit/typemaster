import styled from 'styled-components';
import Image from 'next/image';
import Container from 'components/grid/container.jsx';
import Button from 'components/Button.jsx';

const StyledKeyboard = styled.div`
  margin-top: 83px;
  position: relative;
  span {
    position: absolute;
    top: 0;
    right: 0;
    height: 240px;
    width: 122.5px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 20px 0 0 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 125px;
  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
  }
`;

const PhotoBlock = styled.div`
  min-width: 540px;
  .someimgclass {
    border-radius: 20px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  p {
    font-weight: 700;
    text-transform: uppercase;
    margin-left: 40px;
    font-size: 16px;
  }
`;

const TmKeyboard = () => {
  return (
    <StyledKeyboard>
      <Container>
        <Row>
          <TextBlock>
            <h1>Typemaster Keyboard</h1>
            <p>
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <FlexRow>
              <Button primary />
              <p>Release on 5/27</p>
            </FlexRow>
          </TextBlock>
          <PhotoBlock>
            <Image
              src="/image-keyboard.jpg"
              alt="Picture of the author"
              width={540}
              height={480}
              className="someimgclass"
            />
          </PhotoBlock>
        </Row>
      </Container>
      <span />
    </StyledKeyboard>
  );
};

export default TmKeyboard;
