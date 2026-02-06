import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from './Greek_statue_head'

export default function Statue() {
  return (
    <div className='w-full h-full'>
      <Canvas camera={{ position: [3, -2, 2], fov: 45 }}>
        <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5}>
            <group position={[0, 1.5, 0]}>
                <Model scale={[2, 2, 2]} />
            </group>
        </Stage>

        </Suspense>
        <OrbitControls 
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        />
      </Canvas>
    </div>
  )
}