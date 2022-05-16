import NavBar from "../components/NavBar";
import Box from "../components/Box";
import Map from "../components/Map";
import Crew from "../components/Crew";
import FAQ from "../components/FAQ";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.main}>
            <NavBar />
            <div className={styles.diamond}>
                <Box />
            </div>
            <div className={styles.map}>
                <Map />
            </div>
            <Crew />
            <FAQ />
        </div>
    )
}

export default Landing;