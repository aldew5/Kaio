import Biography from "../components/Biography";
import styles from "../styles/Landing.module.css";

const Crew = () => {
    return (
        <div style={{ paddingBottom: "2rem", backgroundColor: "#EEEEEE", justifyContent: "center", height: "755px" }}>
            <div style={{
                textAlign: "center", justifyContent: "center", marginLeft: "120px", paddingTop: "40px",
                fontFamily: 'Koulen cursive', fontSize: "40px"
            }}>
                <b>Meet Our Team</b>
            </div>
            <div style={{ paddingTop: "2rem", display: "flex", marginLeft: "100px", justifyContent: "center" }}>
                <div style={{ display: "flex", float: "left", paddingLeft: "1rem" }}>
                    <Biography
                        text={"This is where your short biography will go"}
                        image={"Nothing"}
                        position={"Position in the company"}
                        name={"Name"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1rem" }}>
                    <Biography
                        text={"This is where your short biography will go"}
                        image={"Nothing"}
                        position={"Position in the company"}
                        name={"Name"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1rem" }}>
                    <Biography
                        text={"This is where your short biography will go"}
                        image={"Nothing"}
                        position={"Position in the company"}
                        name={"Name"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Crew;