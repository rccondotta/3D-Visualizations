import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { MotionConfig } from "framer-motion";

import { config } from "./config";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />
        <ScrollControls
          pages={config.sections.length}
          damping={0.1}
          maxSpeed={0.2}
        >
          <group position-y={-1}>
            <MotionConfig
              transition={{
                duration: 0.6,
              }}
            >
              <Experience />
            </MotionConfig>
          </group>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
