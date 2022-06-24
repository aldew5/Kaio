import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import WhiteLogo from "../assets/kaio_white.png";
import Crystal from "../assets/crystal_logo.png";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
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
                    <div
                        className={styles.leading}
                        onClick={() => window.location.replace("/#lore")}
                    >
                        Lore
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => window.location.replace("/#map")}
                    >
                        Roadmap
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => window.location.replace("/#crew")}
                    >
                        Our Team
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => window.location.replace("/#faq")}
                    >
                        FAQs
                    </div>
                    <div
                        className={styles.button}
                        onClick={() => window.location.replace("/#social")}
                    >
                        Social Media
                    </div>
                </Toolbar>

            </Box>
        </div >
    );
}

export default NavBar;