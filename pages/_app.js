/* eslint-disable react/prop-types */
import '../styles/main.scss';
import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
