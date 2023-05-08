import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { useRef } from 'react';

export default function Floppa(props) {
  const { nodes, materials } = useGLTF('./models/Floppa.glb')
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.02
  })
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[-0.07, 0.3, 0.25]} rotation={[0, Math.PI / 2, 0]} scale={0.53} />
    </group>
  )
}

useGLTF.preload('./models/Floppa.glb')
