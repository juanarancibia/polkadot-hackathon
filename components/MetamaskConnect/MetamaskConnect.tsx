import styled from '@emotion/styled';
import { useEthers } from '@usedapp/core';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

const ConnectButton = motion(styled.button`
  background: #a4ff8330;
  border: 1px solid #00e100;
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
  font-weight: 600;
`);

const DisconnectButton = motion(styled.button`
  background: #ff000080;
  border: 1px solid #f00;
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
  font-weight: 600;
`);

const MetamaskConnectButton: FC = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const [hasMetamask, setHasMetamask] = useState(false);

  useEffect(() => {
    if (typeof (window as any).ethereum !== 'undefined') {
      setHasMetamask(true);
    }
  });

  const connect = async () => {
    await activateBrowserWallet();
  };

  return (
    <div className="flex align-center text-white">
      {hasMetamask ? (
        account ? (
          <DisconnectButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => deactivate()}
          >
            Disconnect
          </DisconnectButton>
        ) : (
          <ConnectButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => connect()}
          >
            Connect wallet
          </ConnectButton>
        )
      ) : (
        'Please install metamask'
      )}
    </div>
  );
};

export default MetamaskConnectButton;
