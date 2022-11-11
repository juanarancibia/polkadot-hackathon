import MetamaskConnectButton from 'components/MetamaskConnect/MetamaskConnect';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="px-8 py-6 shadow-lg w-full text-center flex justify-between align-center">
      <h1 className="text-3xl font-bold text-white">Batch mint test </h1>

      <MetamaskConnectButton />
    </header>
  );
};

export default Header;
