import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Edges } from '@react-three/drei'
import { EffectComposer, ASCII, Outline, Selection, Select } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import './index.css'
import Mesh from './Mesh'

export default function App() {
    return (
        <div>
            <div>
                <h1 className="name">amir salah</h1>
                <li>
                    <a className="navItems">hi</a>
                </li>
                <li>
                    <a>bye</a>
                </li>
            </div>

            <Mesh></Mesh>
        </div>
    )
}
