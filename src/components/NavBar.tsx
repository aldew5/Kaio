import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import WhiteLogo from "../assets/kaio_white.png";
import Crystal from "../assets/crystal_logo.png";
import RedX from "../assets/redx.png";
import styles from "../styles/NavBar.module.css";
import { useState } from "react";


const NavBar = () => {

    const [pos1, setPos1] = useState<boolean>(false);
    const [pos2, setPos2] = useState<boolean>(false);
    const [pos3, setPos3] = useState<boolean>(false);
    const [pos4, setPos4] = useState<boolean>(false);
    const [pos5, setPos5] = useState<boolean>(false);

    // appbar for movement
    return (
        <div>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <Toolbar>
                    <div>
                        <img
                            src={Crystal} alt="not found"
                            style={{ width: "150px", marginLeft: "-50px" }}
                        />
                    </div>
                    <div>
                        <img
                            src={WhiteLogo} alt="not found"
                            style={{ width: "100px", marginLeft: "-50px" }}
                        />
                    </div>
                    {(pos1) ?
                        <div style={{ position: "absolute", marginLeft: "835px", marginTop: "5px", zIndex: 1 }}>
                            <img src={RedX} alt="not found" width="50px" />
                        </div> :
                        <></>
                    }
                    <div
                        className={styles.leading}
                        onClick={() => window.location.replace("/#lore")}
                        onMouseOver={() => { setPos1(true); }}
                        onMouseLeave={() => { setPos1(false); }}>
                        Lore
                    </div>
                    {(pos2) ?
                        <div style={{ position: "absolute", marginLeft: "930px", marginTop: "5px", zIndex: 1 }}>
                            <img src={RedX} alt="not found" width="50px" />
                        </div> :
                        <></>
                    }
                    <div className={styles.button}
                        onClick={() => window.location.replace("/#map")}
                        onMouseOver={() => { setPos2(true); }}
                        onMouseLeave={() => { setPos2(false); }}>
                        Roadmap
                    </div>
                    {(pos3) ?
                        <div style={{ position: "absolute", marginLeft: "1065px", marginTop: "5px", zIndex: 1 }}>
                            <img src={RedX} alt="not found" width="50px" />
                        </div> :
                        <></>
                    }
                    <div className={styles.button}
                        onClick={() => window.location.replace("/#crew")}
                        onMouseOver={() => { setPos3(true); }}
                        onMouseLeave={() => { setPos3(false); }}>
                        Our Teams
                    </div>
                    {(pos4) ?
                        <div style={{ position: "absolute", marginLeft: "1175px", marginTop: "5px", zIndex: 1 }}>
                            <img src={RedX} alt="not found" width="50px" />
                        </div> :
                        <></>
                    }
                    <div className={styles.button}
                        onClick={() => window.location.replace("/#faq")}
                        onMouseOver={() => { setPos4(true); }}
                        onMouseLeave={() => { setPos4(false); }}>
                        FAQs
                    </div>
                    {(pos5) ?
                        <div style={{ position: "absolute", marginLeft: "1300px", marginTop: "5px", zIndex: 1 }}>
                            <img src={RedX} alt="not found" width="50px" />
                        </div> :
                        <></>
                    }
                    <div className={styles.button}
                        onClick={() => window.location.replace("/#social")}
                        onMouseOver={() => { setPos5(true); }}
                        onMouseLeave={() => { setPos5(false); }}>
                        Social Media
                    </div>
                </Toolbar>

            </Box>
        </div >
    );
}

export default NavBar;