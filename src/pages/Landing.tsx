import NavBar from "../components/NavBar";
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