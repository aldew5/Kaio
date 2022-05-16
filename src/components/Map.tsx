import Boat from "../assets/Boat.png";
import { useEffect, useState } from "react";
import styles from "../styles/Map.module.css";


const Map = () => {

    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScroll(winScroll / height);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('keyup', handleScroll);
        };
    });

    return (
        <div style={{ height: "660px" }}>
            <div className={styles.padding}>
            </div>
            <div>
                <img src={Boat} alt="not found" style={{ opacity: `${scroll * 1.6}`, width: "1440px" }} />
            </div>
        </div>
    )
}
export default Map;