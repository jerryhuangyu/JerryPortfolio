import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "./Loader";

const ContactModel = () => {
  const model = useGLTF("./hrcrobot/hrcrobot.glb");

  return (
    <mesh>
      <pointLight intensity={1} />
      <hemisphereLight intensity={1} />
      <primitive
        object={model.scene}
        scale={8.5}
        position-y={0}
        position-z={-0.4}
        position-x={-0.8}
        rotation-y={0}
      />
    </mesh>
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
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ContactModel />
      </Suspense>
    </Canvas>
  );
};

export default ContactModelCanvas;
