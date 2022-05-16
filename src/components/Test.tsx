import Box from "./Box";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Test.module.css";
import { OrbitControls } from "@react-three/drei";

const Test = () => {
    return (
        <div style={{textAlign:"center", height: "500px"}}>
            <Canvas className={styles.canvas}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Box />
            </Canvas>
            <div>
                This will be the crystal
            </div>
        </div>
    )
}

export default Test;