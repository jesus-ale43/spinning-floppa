import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Head from "next/head";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomModel from "../components/CustomModel";

extend({ OrbitControls });


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Spinning Floppa - Jesús A.</title>
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
        <CustomModel modelPath={"assets/3d/flopa.glb"} position={[0, 0, 0]} scale={[1, 1, 0.8]} spinning={0.02}/>
        <Controls />

      </Canvas>
    </div>
  )
}

function Controls(props) {
  const { camera, gl } = useThree();

  return <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />;
}