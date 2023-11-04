/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { wawaterials } from "../../utils/wawaterials";

export function FerrisWheel(props) {
  const { nodes, materials } = useGLTF("./models/ferris-wheel/model.gltf");
  const refLight = useRef();

  useFrame((state) => {
    const speed = state.clock.elapsedTime * 6;
    const distance = Math.sin(state.clock.elapsedTime) * 0.8;

    refLight.current.position.x = Math.sin(speed) * distance;
    refLight.current.position.y = Math.cos(speed) * distance;
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.25, 0]}>
        <mesh ref={refLight} scale={[0.04, 0.04, 0.04]}>
          <pointLight intensity={1} color={"yellow"} />
          <sphereGeometry />
          <meshStandardMaterial
            {...wawaterials.yellow}
            emissive={wawaterials.yellow.color}
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      </group>
      <mesh
        geometry={nodes["ferris_wheel-Mesh"].geometry}
        material={materials._cabin_green}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_1"].geometry}
        material={materials.ferris_wheel_white}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_2"].geometry}
        material={materials.ferris_wheel_red}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_3"].geometry}
        material={materials.ferris_wheel_yellow}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_4"].geometry}
        material={materials.ferris_wheel_legs_red}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_5"].geometry}
        material={materials.ferris_wheel_blue}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_6"].geometry}
        material={materials.ferris_wheel_orange}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_7"].geometry}
        material={materials.cabin_red}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_8"].geometry}
        material={materials.cabin_blue}
      />
      <mesh
        geometry={nodes["ferris_wheel-Mesh_9"].geometry}
        material={materials.cabin_orange}
      />
    </group>
  );
}

useGLTF.preload("./models/ferris-wheel/model.gltf");
