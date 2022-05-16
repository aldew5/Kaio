import NavBar from "../components/NavBar";
import Test from "../components/Test";
import Map from "../components/Map";
import styles from "../styles/Landing.module.css";
import Background from "../assets/black.jpeg";

const Landing = () => {
    return (
        <div className={styles.main}>
            <NavBar />
            <div className={styles.diamond}>
                <Test />
            </div>
            <div style={{paddingTop:"2rem", justifyContent:"center"}}>
                <Map />
            </div>
           
        </div>
    )
}

export default Landing;