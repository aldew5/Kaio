import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MapImage from "../assets/Map.jpg";


const Map = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <div>
                <NavBar />
                <div style={{ display: "block" }}>
                    <SideBar />
                    <div>
                        <img src={MapImage} alt={"not found"} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Map;
