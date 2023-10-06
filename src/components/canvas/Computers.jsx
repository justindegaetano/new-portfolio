import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      {/* Setting up lighting */}
      <hemisphereLight intensity={.9} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-Mapsize={1024}
      />
      
      {/* Rendering the 3D computer model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.87 : 0.75}
        position={isMobile ? [0, -2.9, -2.7] : [0, -3.25, -1.5]}
        rotation={[-0.01, 0.2, 0.05]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the viewport is considered "mobile" based on a media query
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
  
    // Add an event listener to update the "isMobile" state when the viewport changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frame-loop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 28 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-2/3 h-60vh'
    >
      {/* Render 3D Computer */}
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
  )
}


export default ComputersCanvas