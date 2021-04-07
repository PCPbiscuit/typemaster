import styled from 'styled-components';
import Image from 'next/image';
import Container from 'components/grid/container.jsx';
import Button from 'components/Button.jsx';

const StyledKeyboard = styled.div`
  margin-top: 83px;
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
            <Button primary />
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
    </StyledKeyboard>
  );
};

export default TmKeyboard;
