import { Canvas } from "@react-three/fiber";

import Experience from "./components/Experience";

import "./App.css";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
