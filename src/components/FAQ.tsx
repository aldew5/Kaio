import Question from "./Question";
import { Typography } from "@mui/material";

const FAQ = () => {
    return (
        <div style={{ paddingTop: "4rem", backgroundColor: "white"}}>
            <div style={{marginLeft: "320px"}}>
                <div style={{marginBottom:"2rem"}}>
                    <Typography variant="h4" color="black"><b>FAQ</b></Typography>
                </div>
  
            <Question
                question={"What is Kaio?"}
                response={"Idk you tell me"}
            />
            </div>
        </div>
    )
}

export default FAQ;