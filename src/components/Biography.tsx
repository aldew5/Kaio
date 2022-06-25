import Vlad from "../assets/captain-vlad.png";
import Ira from "../assets/quartermaster-ira.png"
import Yang from "../assets/cartographer-yang.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";

interface BiographyProps {
    image: string;
    position: string;
    text: string;
    name: string;
}


const Biography = ({ image, position, text, name }: BiographyProps) => {

    const handleInstagram = () => {
        if (name === "Vlad") {
            window.location.href = "https://www.instagram.com/glotov_vl";
        } else if (name === "Ira") {
            window.location.href = "https://www.instagram.com/ira_kmu/";
        } else if (name === "Yang") {
            window.location.href = "https://www.instagram.com/yangartworks/";
        }
    }

    return (
        <div style={{ textAlign: "left", width: "400px" }}>
            <img src={(image === "Vlad") ? Vlad : ((image === "Ira") ? Ira : Yang)}
                alt="not found" style={{ height: "450px" }} />
            <div>
                <div style={{ marginTop: "1rem", fontSize: "25px" }}><b>{name}</b></div>
                <div style={{ marginTop: "0.5rem", color: "#63666A", fontSize: "23px" }}>
                    <b>{position}</b>
                </div>
                <div style={{
                    marginTop: "0.5rem", fontSize: "20px",
                    marginBottom: "20px", height: "90px"
                }}>
                    {text}
                </div>
                <div style={{ display: "table", marginLeft: "-10px" }}>
                    <div style={{ display: "table-row" }}>
                        <div style={{ display: "table-cell" }}>
                            <IconButton>
                                <InstagramIcon onClick={handleInstagram} />
                            </IconButton>
                        </div>
                        <div style={{ display: "table-cell" }}>
                            {(name === "Ira") ?
                                <IconButton>
                                    <TwitterIcon
                                        onClick={() => { window.location.href = "https://twitter.com/ginirachan"; }} />
                                </IconButton>
                                : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography;