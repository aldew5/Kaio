import Vlad from "../assets/captain-vlad.png";
import Ira from "../assets/quartermaster-ira.png"
import Yang from "../assets/cartographer-yang.png";

interface BiographyProps {
    image: string;
    position: string;
    text: string;
    name: string;
}


const Biography = ({ image, position, text, name }: BiographyProps) => {

    return (
        <div style={{ textAlign: "left", width: "400px" }}>
            <img src={(image === "Vlad") ? Vlad : ((image === "Ira") ? Ira : Yang)}
                alt="not found" style={{ height: "450px" }} />
            <div>
                <div style={{ marginTop: "1rem", fontSize: "25px" }}><b>{name}</b></div>
                <div style={{ marginTop: "0.5rem", color:"#63666A", fontSize: "23px" }}><b>{position}</b></div>
                <div style={{ marginTop: "0.5rem", fontSize: "20px" }}>{text}</div>
            </div>
        </div>
    )
}

export default Biography;