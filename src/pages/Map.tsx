import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MapImage from "../assets/Mapnobg.png";


const Map = () => {
    return (
        <div style={{ backgroundColor: "black" }}>

            <div style={{ display: "block" }}>

                <div style={{ backgroundImage: "radial-gradient(grey, black)" }}>
                    <img src={MapImage} alt={"not found"} style={{ width: "500px" }} />
                </div>
            </div>
        </div>

    )

}

export default Map;
