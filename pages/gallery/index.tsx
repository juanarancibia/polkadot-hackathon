import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ThreeJS = dynamic(() => import('../../threejs/ThreeJS'), {
  ssr: false,
}) as any;

const Gallery: FC = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="absolute pt-10 font-bold text-5xl text-white tracking-wide uppercase">
        Gallery
      </h1>
      <motion.img
        className="absolute z-10 bottom-10 left-10 w-12 ml-4 bg-white rounded-full"
        src="/assets/icons/back-arrow.png"
        alt=""
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          router.push('/');
        }}
      />
      <ThreeJS />
    </>
  );
};

export default Gallery;
