import Biography from "../components/Biography";
import { Typography } from "@mui/material";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import styles from "../styles/Landing.module.css";

const Crew = () => {
    return (
        <div style={{ textAlign: "center", paddingBottom: "2rem", backgroundColor: "#F0EAD6" }}>
            <NavBar />
            <div style={{ display: "block" }}>
                <SideBar />
                <div style={{textAlign:"left", justifyContent: "left", marginLeft: "120px", paddingTop: "40px"}}>
                    <Typography variant="h4" color="black">Crew</Typography>
                    <div style={{width:"100px", height:"2px", marginLeft: "3px",  backgroundColor: "black"}}></div>
                </div>
                <div style={{ paddingTop: "2rem", display: "flex", marginLeft:"100px"}}>
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