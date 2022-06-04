import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
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

            </div>
        </div>

    )
}

export default Landing;