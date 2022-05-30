import React, { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import * as THREE from 'three';
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import CustomModel from "./gltf";


extend({ DragControls });
extend({ OrbitControls });


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Home - Jesús A.</title>
        <meta name="description" content="" />
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      
      <Canvas
        shadows={true}
        camera={{ 
          position: [4, 1.6, 2.6], 
        }}
      >
        <ambientLight color={"white"} intensity={0.5} />
        <CustomModel modelPath={"assets/3d/flopa.glb"} position={[0, 0, 0]} scale={[1, 1, 0.8]} spinning={true}/>
        <Controls />

      </Canvas>
    </div>
  )
}

function Sun(props) {
  const sunRef = useRef();

  useFrame(() => {
    sunRef.current.rotation.y += 0.0005;
  });

  const texture = new THREE.TextureLoader().load('assets/textures/sun.jpg');


  return (
    <mesh {...props} ref={sunRef} >
      <pointLight castShadow />
      <sphereBufferGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

function Earth(props) {
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.003;
  });

  const texture = new THREE.TextureLoader().load('assets/textures/cirnu.jpg');
  
  return (
    <mesh {...props} ref={earthRef} recieveShadow={true} castShadow={true}>
      <sphereBufferGeometry args={[0.1, 30, 10]} />
      <meshStandardMaterial map={texture} color={"white"} />
    </mesh>
  );
}



















function Controls(props) {
  const { camera, gl } = useThree();

  return <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />;
}

function Draggable(props) {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [objects, setObjects] = useState();
  const { camera, gl, scene } = useThree();
  useEffect(() => {
    setObjects(groupRef.current.children);
  }, [groupRef]);

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", () => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.orbitControls.enabled = true;
    });
  }, [objects]);
  return (
    <group ref={groupRef}>
      <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
      {props.children}
    </group>
  );
}