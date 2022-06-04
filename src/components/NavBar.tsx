import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import BlackLogo from "../assets/blacklogo.png";
import Crystal from "../assets/crystal.png";
import styles from "../styles/NavBar.module.css";


const NavBar = () => {

    return (
        <div style={{ position: "fixed", top: "0px", zIndex: "50" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: "transparent", boxShadow: "none" }}>
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
                        >
                            Lore
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                        >
                            Roadmap
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                        >
                            Our Team
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                        >
                            Pixel Board
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                        >
                            FAQs
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;