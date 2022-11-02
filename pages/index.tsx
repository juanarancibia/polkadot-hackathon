import HomeComponent from 'components/HomeComponent/HomeComponent';
import Head from 'next/head';

export const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Polkadot Hackathon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent />
    </>
  );
};

export default Home;
