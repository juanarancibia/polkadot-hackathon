import Header from 'components/Header';
import { FC, useEffect, useState } from 'react';
import Trianglify from 'react-trianglify';

const Layout: FC = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    innerHeight: 1500,
    innerWidth: 700,
  });

  useEffect(() => {
    setWindowSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  }, []);

  const trianglifyOptions = {
    width: windowSize.innerWidth,
    height: windowSize.innerHeight,
    cellSize: 75,
    variance: 0.75,
    fill: true,
    xColors: ['#e0d47b', '#b4dba9', '#228e82', '#005274'],
    strokeWidth: 5,
    points: null,
  };

  return (
    <div className="flex flex-grow flex-col trianglify">
      <Trianglify {...trianglifyOptions} key={windowSize.innerWidth} />
      <Header />
      <main className="container mx-auto mt-10 flex justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
