import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Edges } from '@react-three/drei'
import { EffectComposer, ASCII, Outline, Selection, Select } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import { Link } from 'react-router'
import './index.css'
import Mesh from './Mesh'

export default function App() {
    return (
        <div className="app-container">
            <Link to="/" className="home-icon">
                ⌂
            </Link>

            <div className="header-section">
                <h1 className="main-heading">amir salah</h1>
                <ul className="nav-items">
                    <li>
                        <Link to="/career" className="nav-link">
                            career
                        </Link>
                    </li>
                    <li>
                        <Link to="/writing" className="nav-link">
                            writing
                        </Link>
                    </li>
                </ul>
            </div>

            <Mesh></Mesh>
        </div>
    )
}
