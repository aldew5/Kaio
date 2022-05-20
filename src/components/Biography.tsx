import Anon from "../assets/anon.jpeg";

interface BiographyProps {
    image: string;
    position: string;
    text: string;
    name: string;
}

const Biography = ({image, position, text, name}: BiographyProps) => {
    return (
        <div style={{textAlign:"left", width:"255px"}}>
            <img src={Anon} alt="not found" />
            <div>
                <div style={{marginTop:"1rem", fontSize:"19px"}}>{name}</div>
                <div style={{marginTop:"0.5rem", color:"grey"}}><b>{position}</b></div>
                <div style={{marginTop: "0.5rem"}}>{text}</div>
            </div>
        </div>
    )
}

export default Biography;