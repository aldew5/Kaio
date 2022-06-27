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
                    boxShadow: "50px", marginTop: "300px", marginLeft: "250px", paddingBottom: "200px",
                    position: "absolute", marginRight: "100px"
                }}>
                    <img src={Gem} alt="not found" width="900px" />
                </div>
                <div style={{
                    position: "absolute", marginTop: "295px", marginLeft: "500px",
                    marginRight: "500px", textShadow: "2px 2px 4px #000000"
                }}>
                    <img src={DiamondLogo} alt="not found" width="500px" />
                </div>
            </div>
        </div>

    )
}

export default Landing;