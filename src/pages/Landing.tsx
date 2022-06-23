import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Gem from "../assets/gem.gif";
import DiamondLogo from "../assets/kaio_diamond.png";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.container}>
            <div style={{ position: "absolute" }}>
                <SideBar />
            </div>
            <div className={styles.main}>
                <div style={{
                    marginTop: "300px", marginLeft: "300px", paddingBottom: "200px",
                    position: "absolute"
                }}>
                    <img src={Gem} alt="not found" width="900px" />
                </div>
                <div style={{position:"absolute", marginTop: "275px", marginLeft: "550px"}}>
                    <img src={DiamondLogo} alt="not found" width="500px" />
                </div>
            </div>
        </div>

    )
}

export default Landing;