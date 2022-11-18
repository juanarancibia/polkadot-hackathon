/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { FC, useContext } from 'react';
import { BlobImagesContext } from 'shared/contexts/BlobImagesContext';
import Background from './Background';
import CameraController from './CameraController';
import WallpaperFrame from './WallpaperFrame';

const ThreeJS: FC = () => {
  const { blobImages } = useContext(BlobImagesContext);
  let IMAGES = blobImages.map((blob) => URL.createObjectURL(blob));
  if (IMAGES.length < 12) {
    IMAGES = Array(12).fill(IMAGES).flat().slice(0, 12);
  }
  const separation = (Math.PI * 2) / IMAGES.length;

  return (
    <div
      id="canvas-container"
      style={{
        flex: 1,
        width: '100vw',
        position: 'relative',
        zIndex: '2',
      }}
    >
      <Canvas>
        <Background />
        <CameraController numberOfImages={IMAGES.length} />
        <ambientLight color={'0x202020'} intensity={1} />
        {/* <hemisphereLight
          args={["0xffffbb", "0x080820", 1]}
          color={color}
          groundColor={groundColor}
        /> */}
        <pointLight color={'0xffffff'} intensity={1} position={[0, 1, 0]} />
        {/* <gridHelper args={[100, 20]} />

        {/* <BaseGround /> */}

        {IMAGES.map((imgName, index) => {
          return (
            <WallpaperFrame
              key={index}
              image={`${imgName}`}
              position={index * separation}
              radius={IMAGES.length}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default ThreeJS;
