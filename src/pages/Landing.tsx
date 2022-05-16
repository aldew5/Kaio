import NavBar from "../components/NavBar";
import Test from "../components/Test";
import Map from "../components/Map";
import styles from "../styles/Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.main}>
            <NavBar />
            <div style={{paddingTop:"2rem"}}>
                <Test />
            </div>
            <div style={{paddingTop:"2rem", justifyContent:"center"}}>
                <Map />
            </div>
           
        </div>
    )
}

export default Landing;