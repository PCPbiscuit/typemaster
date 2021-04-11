import Head from 'next/head';
import TmKeyboard from 'components/TmKeyboard';
import Mechanical from 'components/MechanicalKeyboard';
import Features from 'components/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TmKeyboard />
      <Mechanical />
      <Features />
    </>
  );
}
