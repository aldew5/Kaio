import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/Wall.jpg";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
    const colorMap = useLoader(TextureLoader, texture);

    return (
        <div style={{ textAlign: "center", height: "500px" }}>
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <mesh rotation={[90, 0, 20]}>
                    <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                    <meshStandardMaterial map={colorMap} />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Box;