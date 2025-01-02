import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={0.8} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.6}
        position={isMobile ? [0, -2.2, -0.6] : [0, -3.25, -1.25]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 636px)");
    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
