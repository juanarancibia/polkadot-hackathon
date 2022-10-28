import Head from 'next/head';
import dynamic from 'next/dynamic';
import { draw, setup } from 'p5/base.p5';

const Sketch = dynamic(import('react-p5'), { ssr: false });

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Polkadot Hackathon</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container mx-auto">
      <section className="flex items-center justify-center">
        <Sketch setup={setup} draw={draw} />
      </section>
    </div>
  </>
);

export default Home;
