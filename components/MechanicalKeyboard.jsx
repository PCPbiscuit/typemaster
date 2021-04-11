import styled from 'styled-components';
import Image from 'next/image';
import Container from 'components/grid/container.jsx';

const StyledKeyboard = styled.div`
  margin-top: 30px;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 240px;
    width: 122.5px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 0px 20px 20px 0;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  .keyboard-img {
    border-radius: 20px;
  }
`;
const ImageWrapper = styled.div`
  &:first-child {
    margin-right: 30px;
    min-width: 255px;
  }
  min-width: 445px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 125px;
  h1 {
    text-transform: uppercase;
    margin-bottom: 27px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    margin: 0;
    width: 103%;
  }
`;

const MechanicalKeyboard = () => (
  <StyledKeyboard>
    <Container>
      <Row>
        <ImageWrapper>
          <Image
            src="/image-phone-and-keyboard.jpg"
            alt="Picture of the author"
            width={255}
            height={480}
            className="keyboard-img"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/image-glass-and-keyboard.jpg"
            alt="Picture of the author"
            width={445}
            height={480}
            className="keyboard-img"
          />
        </ImageWrapper>
        <TextBlock>
          <h2>mechanical wireless Keyboard</h2>
          <p>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </p>
        </TextBlock>
      </Row>
    </Container>
    <span />
  </StyledKeyboard>
);

export default MechanicalKeyboard;
