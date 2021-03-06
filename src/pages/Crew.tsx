import Biography from "../components/Biography";
import styles from "../styles/Crew.module.css";


const Crew = () => {
    return (
        <div className={styles.container}>
            <div style={{
                textAlign: "left", marginTop: "150px",
                fontSize: "40px", color: "#89683d", paddingBottom: "80px",
                marginLeft: "265px"
            }}>
                Our Team
            </div>
            <div style={{ paddingTop: "2rem", display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={"Does all things marketing. Focuses on increasing brand recognition and establishing collaborations with various partners. One-piece fanboy. "}
                        image={"Vlad"}
                        position={"Marketing"}
                        name={"Captian Vlad"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={`Oversees and manages Kaio’s socials. Strives to make the Kaio community an inclusive 
                        space for all and values interacting with holders. Devoted Boston Celtics fan.`}
                        image={"Ira"}
                        position={"Community manager"}
                        name={"Quatermaster Ira"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={`Responsible for most of the design aspects of the collection. 
                        Has ample experience in design and illustration achieved by working in various design jobs. Loves anime.`}
                        image={"Yang"}
                        position={"Design"}
                        name={"Cartographer Yang"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Crew;