import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/main.scss';
import Layout from '../components/Layout.jsx';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-black-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-black-webfont.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-bold-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-bold-webfont.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-extrabold-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-extrabold-webfont.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-extralight-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-extralight-webfont.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-light-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-light-webfont.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-medium-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-medium-webfont.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-regular-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-regular-webfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-semibold-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-semibold-webfont.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/barlow/barlow-thin-webfont.woff2') format('woff2'),
    url('/fonts/barlow/barlow-thin-webfont.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}


  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #7b8bad;
    font-family: 'Barlow';
  }
  h1,
h2,
h3,
h4,
h5 {
  color: #162542;
  text-transform: uppercase;
}
h1 {
  font-size: 56px;
  line-height: 100%;
  font-weight: 900;
}
h2 {
  font-size: 32px;
  line-height: 120%;
  font-weight: 900;
}
h3 {
  font-size: 24px;
  line-height: 120%;
  font-weight: 900;
}
h4 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
}
h5{
  font-size: 14px;
  line-height: 100%;
  font-weight: 600;
}
p{
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
}
`;

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    orange: '#f16718',
    orange_secondary: '#ff9b62',
    blue: '#162542',
    blue_secondary: '#7b8bad',
    gray: '#e8eff2',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
