/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import {
  BoxGeometry,
  Clock,
  Mesh,
  MeshBasicMaterial,
  sRGBEncoding,
} from 'three';

const WallpaperFrame: any = (props: {
  image: string;
  position: number;
  radius: number;
}) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';

    return () => {
      document.body.style.cursor = 'auto';
      return;
    };
  }, [hovered]);

  const imageTexture = useTexture(props.image);
  imageTexture.encoding = sRGBEncoding;

  const geometry = new BoxGeometry(3.5, 6.2, 0.001);
  const material = new MeshBasicMaterial();
  material.map = imageTexture;
  material.toneMapped = false;

  const mesh = new Mesh(geometry, material);
  mesh.position.setFromCylindricalCoords(props.radius * 0.7, props.position, 1);
  mesh.lookAt(0, 1, 0);

  let clock = new Clock();

  useFrame(() => {
    const t = clock.getElapsedTime();

    if (!active && hovered && mesh.scale.x < 1.01) {
      mesh.scale.x = 1 + t / 10;
      mesh.scale.y = 1 + t / 10;
    }

    if (active && hovered && mesh.scale.x < 1.5) {
      mesh.scale.x = 1 + t * 1.2;
      mesh.scale.y = 1 + t * 1.2;
    }
  });

  const onImageClick = () => {
    clock = new Clock();
    setActive((current) => !current);
  };

  return (
    <primitive
      object={mesh}
      onClick={onImageClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => {
        setHover(false);
        setActive(false);
      }}
    />
  );
};

export default WallpaperFrame;
