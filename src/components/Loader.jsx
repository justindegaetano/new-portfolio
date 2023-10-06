import { useProgress, Html } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 26,
          color: "#f1f1f1",
          fontWeight: 800
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;