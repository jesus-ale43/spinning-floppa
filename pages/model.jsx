import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf";

const ModelViewer = ({ modelPath, scale = 4, position = [0, 0, 0] }) => {
  return <GltfModel modelPath={modelPath} position={[0, 0, 0]} />

};

export default ModelViewer;