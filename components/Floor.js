import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Floor(props) {
	const texture = useLoader(TextureLoader, '/textures/pavement.jpg')
	return (
		<mesh {...props} recieveShadow={true}>
			<boxGeometry args={[20, 1, 10]} />
			<meshPhysicalMaterial map={texture} color={'white'} />
		</mesh>
	)
}

export default Floor
