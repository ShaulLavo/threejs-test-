import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Box(props) {
	const texture = useLoader(TextureLoader, '/textures/red-paint.jpg')

	// const texture = useLoader(
	// 	TextureLoader,
	// 	'/_next/static/media/pavement.b39f55c2.jpg'
	// )

	return (
		<mesh {...props} recieveShadow={true} castShadow={true}>
			<boxGeometry />
			<meshPhysicalMaterial map={texture} color={'white'} />
		</mesh>
	)
}

export default Box
