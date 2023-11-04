/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { wawaterials } from "../../utils/wawaterials";
export function Mustard(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/bottle-musterd/model.gltf");
  return (
    <animated.group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.bottleMusterd.geometry} scale={0.21}>
        <meshStandardMaterial {...wawaterials.yellow} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("./models/bottle-musterd/model.gltf");