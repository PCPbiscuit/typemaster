import Head from 'next/head';
import TmKeyboard from 'components/TmKeyboard.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TmKeyboard />
    </>
  );
}
