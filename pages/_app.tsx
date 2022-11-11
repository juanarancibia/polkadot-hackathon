import {
  Config,
  DAppProvider,
  Goerli,
  Mainnet,
  MetamaskConnector,
} from '@usedapp/core';
import Layout from 'components/Layout';
import { getDefaultProvider } from 'ethers';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { BlobImagesContextProvider } from 'shared/contexts/BlobImagesContext';
import 'styles/tailwind.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  noMetamaskDeactivate: true,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet', {
      alchemy: '28V94dZPmWS1rhwqI8ULPt2SELEH7K8x',
    }),
    [Goerli.chainId]: getDefaultProvider('goerli', {
      alchemy: '28V94dZPmWS1rhwqI8ULPt2SELEH7K8x',
    }),
  },
  connectors: {
    metamask: new MetamaskConnector(),
  },
};

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const AnyComponent = Component as any;
  return (
    <DAppProvider config={config}>
      <BlobImagesContextProvider>
        <Layout>
          <AnyComponent {...pageProps} />
        </Layout>
      </BlobImagesContextProvider>
    </DAppProvider>
  );
};
export default MyApp;
