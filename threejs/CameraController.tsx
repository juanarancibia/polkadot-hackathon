import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CameraController: any = (props: { numberOfImages: number }) => {
  const { camera, gl } = useThree();
  (camera as PerspectiveCamera).fov = 50;
  (camera as PerspectiveCamera).zoom =
    props.numberOfImages > 15 ? (props.numberOfImages > 30 ? 2.5 : 1.5) : 1;

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.target = new Vector3(0, 1, 0);
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
    controls.rotateSpeed = 0.1;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.maxDistance = 8;
    controls.minDistance = 2;
    controls.enablePan = false;

    controls.update();
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

export default CameraController;
