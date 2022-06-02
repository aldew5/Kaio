import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GoldLogo from "../assets/Gold.png";
import styles from "../styles/NavBar.module.css";

import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div style={{ position: "fixed", top: "0px", zIndex: "50" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: "transparent", boxShadow: "none" }}>
                    <Toolbar>
                        <div>
                            <img src={GoldLogo} alt="not found" style={{ width: "70px" }}
                                onClick={() => { navigate("/") }} />
                        </div>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "50rem"
                            }}
                            className={styles.leading}
                            onClick={() => { navigate("/crew") }}>
                            Lore
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                            onClick={() => { navigate("/map") }}>
                            Roadmap
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            style={{ color: "white" }}
                            onClick={() => { navigate("/faq") }}>
                            Our Team
                        </Button>
                        <Button
                            sx={{
                                color: "white", fontSize: "17px", fontWeight: "500",
                                textTransform: "none", marginLeft: "1rem"
                            }}
                            className={styles.button}
                            onClick={() => { navigate("/faq") }}>
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