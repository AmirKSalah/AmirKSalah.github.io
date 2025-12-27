import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Edges } from '@react-three/drei'
import { EffectComposer, ASCII, Outline, Selection, Select } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import './index.css'
import { ASCIIEffect } from './effect'

const SpinningMesh = () => {
    const meshRef = useRef()
    useFrame((_, delta) => {
        meshRef.current.rotation.y += delta * 0.5
        meshRef.current.rotation.x += delta * 0.2
    })
    return (
        <mesh ref={meshRef}>
            <Edges lineWidth={5} color={'black'}></Edges>
            <torusKnotGeometry position={[0, 0, 0]} args={[5, 1, 50, 8]} />
            <meshStandardMaterial color="white" />
        </mesh>
    )
}

export default function Mesh() {
    const asciiEffect = useMemo(() => new ASCIIEffect({ characters: `10101010101010101010`, color: 'rgba(220, 126, 246, 1)' }), [])

    return (
        <div className="centerGraphContainer">
            <div className="graphCanvas">
                <Canvas
                    camera={{
                        position: [-20, 0, 0],
                    }}
                >
                    <directionalLight position={[-2, 4, 2]} color={'red'} intensity={1} />
                    <ambientLight intensity={0.3} />

                    <SpinningMesh />

                    <OrbitControls />
                    <EffectComposer>
                        <Outline visibleEdgeColor="white" hiddenEdgeColor="black" blur edgeStrength={3} width={2} />
                        <primitive object={asciiEffect} />
                    </EffectComposer>
                </Canvas>
            </div>
        </div>
    )
}
