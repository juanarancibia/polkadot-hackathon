import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'styles/tailwind.css';
import Layout from 'components/Layout';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any;
  return (
    <Layout>
      <AnyComponent {...pageProps} />
    </Layout>
  );
};
export default MyApp;
