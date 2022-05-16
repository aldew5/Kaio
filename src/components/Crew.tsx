import Biography from "./Biography";
import { Typography } from "@mui/material";

const Crew = () => {
    return (
        <div style={{ paddingTop: "2rem", textAlign: "center", paddingBottom: "2rem", backgroundColor: "white" }}>
            <Typography variant="h4" color="black">Meet the Crew</Typography>
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
    )
}

export default Crew;