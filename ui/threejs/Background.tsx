import { useThree } from '@react-three/fiber';
import { FC } from 'react';

const Background: FC = () => {
  const { gl } = useThree();

  gl.setClearColor(0xffffff, 0);
  gl.setClearAlpha(0);

  return null;
};

export default Background;
