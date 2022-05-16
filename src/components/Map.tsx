import Boat from "../assets/Boat.png";
import { useEffect, useState } from "react";

const Map = () => {

    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScroll(winScroll/height);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('keyup', handleScroll);
        };
      });

    return (
        <div>
            <img src={Boat} alt="not found" style={{opacity:`${scroll}`}}/>
        </div>
    )
}

export default Map;