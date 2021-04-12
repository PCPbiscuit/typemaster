import styled from 'styled-components';
import Image from 'next/image';
import Container from 'components/grid/container.jsx';
import dynamic from 'next/dynamic';

const arr = [
  {
    title: 'HIGHLY COMPATIBLE',
    text:
      'Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.',
    icon: 'Desktop',
  },
  {
    title: 'WIRELESS WITH BLUETOOTH',
    text:
      'Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.',
    icon: 'Bluetooth',
  },
  {
    title: 'HIGH CAPACITY BATTERY',
    text:
      'Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.',
    icon: 'Battery',
  },
  {
    title: 'RGB BACKLIT MODES',
    text:
      'Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.',
    icon: 'Rgb',
  },
];

const StyledFeatures = styled.div`
  margin-top: 168px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 125%;
  &:last-child {
    margin-right: 0;
  }
  h3 {
    margin-top: 48px;
    margin-bottom: 24px;
    width: 85%;
  }
  p {
    margin: 0;
    width: 100%;
  }
`;

const Icon = styled.span`
  height: 65px;
  width: 65px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Features = () => {
  return (
    <StyledFeatures>
      <Container>
        <Row>
          {arr.map((k, i) => {
            const DynamicComponent = dynamic(() => import(`./icons/${k.icon}`));
            return (
              <StyledFeature key={i}>
                <Icon>
                  <DynamicComponent />
                </Icon>
                <h3>{k.title}</h3>
                <p>{k.text}</p>
              </StyledFeature>
            );
          })}
        </Row>
      </Container>
    </StyledFeatures>
  );
};

export default Features;
