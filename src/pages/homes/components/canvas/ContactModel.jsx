import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from './Loader';

const ContactModel = () => {
  const model = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={model.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ContactModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ContactModel />
      </Suspense>
    </Canvas>
  );
};

export default ContactModelCanvas