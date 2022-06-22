import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import BlackLogo from "../assets/blacklogo.png";
import Crystal from "../assets/crystal_logo.png";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {
    // appbar for movement
    return (
        <div className={styles.container}>
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
                            src={BlackLogo} alt="not found"
                            style={{ width: "100px", marginLeft: "-50px" }}
                        />
                    </div>
                    <Button
                        sx={{
                            color: "white", fontSize: "17px", fontWeight: "500",
                            textTransform: "none", marginLeft: "45rem"
                        }}
                        className={styles.leading}
                        onClick={() => window.location.replace("/#lore")}
                    >
                        Lore
                    </Button>
                    <Button
                        sx={{
                            color: "white", fontSize: "17px", fontWeight: "500",
                            textTransform: "none", marginLeft: "1rem"
                        }}
                        className={styles.button}
                        onClick={() => window.location.replace("/#map")}
                    >
                        Roadmap
                    </Button>
                    <Button
                        sx={{
                            color: "white", fontSize: "17px", fontWeight: "500",
                            textTransform: "none", marginLeft: "1rem"
                        }}
                        className={styles.button}
                        onClick={() => window.location.replace("/#crew")}
                    >
                        Our Team
                    </Button>
                    <Button
                        sx={{
                            color: "white", fontSize: "17px", fontWeight: "500",
                            textTransform: "none", marginLeft: "1rem"
                        }}
                        className={styles.button}
                        onClick={() => window.location.replace("/#faq")}
                    >
                        FAQs
                    </Button>
                </Toolbar>

            </Box>
        </div >
    );
}

export default NavBar;