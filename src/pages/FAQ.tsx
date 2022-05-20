import Question from "../components/Question";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { Typography } from "@mui/material";
import styles from "../styles/Landing.module.css";

const FAQ = () => {
    return (
        <div style={{ textAlign: "center", paddingBottom: "2rem"}}>
            <NavBar />
            <div style={{ display: "block" }}>
                <SideBar />
                <div style={{ paddingTop: "4rem", backgroundColor: "white", textAlign: "left" }}>
                    <div style={{ marginLeft: "320px" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <Typography variant="h4" color="black"><b>FAQ</b></Typography>
                        </div>

                        <Question
                            question={"What is Kaio?"}
                            response={"Idk you tell me"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;