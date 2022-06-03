import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function CustomModel({ modelPath, position, scale, spinning }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    ref.current.rotation.y += !spinning ? 0 : spinning;
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      scale={scale}
    />
  );
};

