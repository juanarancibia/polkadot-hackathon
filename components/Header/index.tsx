import MetamaskConnectButton from 'components/MetamaskConnect/MetamaskConnect';
import Link from 'next/link';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="px-8 py-6 shadow-lg w-full text-center flex justify-between align-center">
      <h1 className="text-3xl font-bold text-white">Batch mint test </h1>

      <div className="flex items-center gap-10">
        <Link
          href="/gallery"
          className="text-white font-semibold "
          style={{ height: 'fit-content' }}
        >
          Gallery
        </Link>
        <MetamaskConnectButton />
      </div>
    </header>
  );
};

export default Header;
