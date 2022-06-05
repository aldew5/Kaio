import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Gem from "../assets/gem.gif";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.container}>
            <div style={{ position: "absolute" }}>
                <NavBar />
            </div>
            <div style={{ position: "absolute" }}>
                <SideBar />
            </div>
            <div className={styles.main}>
                <div style={{ paddingTop: "350px", paddingLeft: "100px" }}>
                    <img src={Gem} alt="not found" />
                </div>
            </div>
        </div>

    )
}

export default Landing;