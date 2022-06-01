import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GoldLogo from "../assets/Gold.png";
import Logo from "../assets/Logo.png";

import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div style={{ position: "fixed", top: "0px", zIndex: "50" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: "transparent", boxShadow: "none" }}>
                    <Toolbar>
                        <div style={{
                           
                        }}>
                            <img src={GoldLogo} alt="not found" style={{ width: "70px" }}
                                onClick={() => { navigate("/") }} />
                        </div>
                        <Button style={{
                            color: "white",
                            fontWeight: "500"
                        }} sx={{ marginLeft: "50rem", textTransform: "none" }} onClick={() => { navigate("/crew") }}>
                            Lore
                        </Button>
                        <Button style={{
                            color: "white",
                            fontWeight: "500"
                        }}
                            sx={{ textTransform: "none" }}
                            onClick={() => { navigate("/map") }}>
                            Roadmap
                        </Button>
                        <Button style={{
                            color: "white",
                            fontWeight: "500"
                        }}
                            sx={{ textTransform: "none" }}
                            onClick={() => { navigate("/faq") }}>
                            Our Team
                        </Button>
                        <Button style={{
                            color: "white",
                            fontWeight: "500"
                        }}
                            sx={{ textTransform: "none" }}
                            onClick={() => { navigate("/faq") }}>
                            Pixel Board
                        </Button>
                        <Button
                            sx={{ textTransform: "none" }}
                            style={{
                                color: "white", fontWeight: "500"
                            }}>
                            FAQs
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;