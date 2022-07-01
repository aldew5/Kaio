import { useState, useEffect } from "react";
import LinedMap from "../assets/map_with_text.png";
import EmptyMap from "../assets/empty_map.png";


const Map = () => {
    const [scrolled, setScrolled] = useState<number>(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrolled(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div style={{ display: "grid" }}>
                <div style={{ gridColumn: 1, gridRow: 1 }}>
                    <img src={EmptyMap} alt={"not found"} style={{ width: "500px" }} />
                </div>
                <div style={{
                    gridColumn: 1, gridRow: 1,
                    height: scrolled - 3600, maxHeight: "1200px", overflow: "hidden"
                }}>
                    <img src={LinedMap} alt={"not found"} style={{ width: "500px" }} />
                </div>
            </div>
        </div>
    )

}

export default Map;
