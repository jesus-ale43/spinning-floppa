import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Floppa from '@/components/Floppa'

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <OrbitControls />
      <Floppa scale={[1, 1, 0.8]}/>
    </Canvas>
  )
}
