import css from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'
import OrbitControls from '../components/OrbitControls'
import Light from '../components/Light'
import Floor from '../components/Floor'
import Draggable from '../components/Draggable'
import { Suspense } from 'react'

export default function Home() {
	return (
		<div className={css.scene}>
			<Canvas
				shadows={true}
				className={css.canvas}
				camera={{
					position: [-6, 7, 7]
				}}
			>
				<ambientLight color={'white'} intensity={0.2} />
				<Light position={[0, 3, 0]} />
				<Draggable>
					<Suspense fallback={null}>
						<Box rotateX={3} rotateY={0.2} />
					</Suspense>
				</Draggable>
				<OrbitControls />
				<Suspense fallback={null}>
					<Floor position={[0, -1, 0]} />
				</Suspense>
			</Canvas>
		</div>
	)
}
