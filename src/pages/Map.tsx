import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MapImage from "../assets/Mapnobg.png";


const Map = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div>
                <NavBar />
                <div style={{ display: "block" }}>
                    <SideBar />
                    <div style={{ backgroundImage: "radial-gradient(grey, black)" }}>
                        <img src={MapImage} alt={"not found"} style={{ width: "500px" }} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Map;
