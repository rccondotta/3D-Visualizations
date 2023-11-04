/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { wawaterials } from "../../utils/wawaterials";
export function Ketchup(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/bottle-ketchup/model.gltf");
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.bottleKetchup.geometry}
        material={materials.red}
        scale={0.21}
      >
        <meshStandardMaterial {...wawaterials.red} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("./models/bottle-ketchup/model.gltf");
