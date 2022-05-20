import Biography from "../components/Biography";
import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import styles from "../styles/Landing.module.css";

const Crew = () => {
    return (
        <div style={{ paddingTop: "2rem", textAlign: "center", paddingBottom: "2rem", backgroundColor: "white" }}>
            <NavBar />
            <div style={{ display: "block" }}>
                <SideBar />
                <div style={{textAlign:"left", marginLeft: "23rem"}}>
                    <Typography variant="h4" color="black">Crew</Typography>
                </div>
                <div style={{ paddingTop: "2rem", display: "flex", justifyContent: "center" }}>
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
        </div>
    )
}

export default Crew;