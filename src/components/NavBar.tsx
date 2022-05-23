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
        <div style={{ position: "sticky", top: "10px", zIndex: "50"}}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ backgroundColor: "#FFB2B2", boxShadow: "none" }}>
                    <Toolbar>
                        <div style={{
                            paddingLeft: "10px",
                            paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px",
                            backgroundColor:"black", borderRadius:"15px"
                        }}>
                            <img src={GoldLogo} alt="not found" style={{ width: "70px"}}
                                onClick={() => { navigate("/") }} />
                        </div>
                        <Button style={{ borderRadius: 8, backgroundColor: "black" }}
                            variant='contained' sx={{ marginLeft: "62rem" }} onClick={() => { navigate("/crew") }}>
                            CREW
                        </Button>
                        <Button style={{ borderRadius: 8, backgroundColor: "black", marginLeft: "15px" }}
                            variant='contained' onClick={() => { navigate("/map") }}>
                            MAP
                        </Button>
                        <Button style={{ borderRadius: 8, backgroundColor: "black", marginLeft: "15px" }}
                            variant='contained' onClick={() => { navigate("/faq") }}>
                            FAQ
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;