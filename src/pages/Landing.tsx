import NavBar from "../components/NavBar";
import Box from "../components/Box";
import Map from "../components/Map";
import Crew from "../components/Crew";
import FAQ from "../components/FAQ";
import SideBar from "../components/SideBar";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.main}>
            <NavBar />
            <div style={{display:"block"}}>
                <SideBar />
                <div className={styles.diamond}>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing;