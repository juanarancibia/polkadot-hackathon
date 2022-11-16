/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial, sRGBEncoding } from 'three';

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

  return (
    <primitive
      object={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => hovered && setActive(true)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => {
        setHover(false);
        setActive(false);
      }}
    />
  );
};

export default WallpaperFrame;
