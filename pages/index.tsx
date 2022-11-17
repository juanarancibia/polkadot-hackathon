import HomeComponent from 'components/HomeComponent/HomeComponent';
import Head from 'next/head';

export const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Batch minting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <h1 className="pt-10 font-bold text-center text-5xl text-white tracking-wide uppercase">
          Select your images
        </h1>
        <HomeComponent />
      </div>
    </>
  );
};

export default Home;
