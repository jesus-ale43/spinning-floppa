import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CustomModel = ({ modelPath, position, scale, spinning}) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    ref.current.rotation.y += spinning ? 0.02 : 0;
  });

  return <primitive ref={ref} object={gltf.scene} position={position} scale={scale}/>






  /*
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}

      />
    </>
  );
};
*/
}
export default CustomModel;