import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const HeroModel = ({ isMobile }) => {
  const model = useGLTF('./hrc/hrc_model.glb');
  // const model = useGLTF('./car/scene.gltf');
  // const model = useGLTF('./robot/poly.glb');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 5.4 : 6.6}
        position={isMobile ? [0, -1.6, 0] : [-2.5, -1.7, 0.5]}
        rotation={[-0.03, -5, 0.1]}
      />
    </mesh>
  )
}

const HeroModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  const handleMediaQueryChange = (event) => setIsMobile(event.matches);

  useEffect(() => {
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="z-20"
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <HeroModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HeroModelCanvas;
