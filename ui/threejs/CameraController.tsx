import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';

const CameraController: any = (props: { numberOfImages: number }) => {
  const { camera, gl } = useThree();
  (camera as PerspectiveCamera).fov = 50;
  (camera as PerspectiveCamera).zoom =
    props.numberOfImages > 15 ? (props.numberOfImages > 30 ? 2.5 : 1.5) : 1;

  return (
    <OrbitControls
      args={[camera, gl as any]}
      target={[0, 1, 0]}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      rotateSpeed={0.1}
      autoRotate={true}
      autoRotateSpeed={0.5}
      enableZoom={true}
      maxDistance={8}
      minDistance={2}
      enablePan={false}
    />
  );
};

export default CameraController;
