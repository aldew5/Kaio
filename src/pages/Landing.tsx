import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.main}>
            <div style={{ position: "absolute" }}>
                <NavBar />
            </div>
            <div style={{ position: "absolute" }}>
                <SideBar />
            </div>
            <div className={styles.diamond}>

            </div>
        </div>

    )
}

export default Landing;