import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'styles/tailwind.css';
import Layout from 'components/Layout';
import { BlobImagesContextProvider } from 'shared/contexts/BlobImagesContext';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any;
  return (
    <BlobImagesContextProvider>
      <Layout>
        <AnyComponent {...pageProps} />
      </Layout>
    </BlobImagesContextProvider>
  );
};
export default MyApp;
