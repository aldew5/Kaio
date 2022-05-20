import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import GoldLogo from "../assets/Gold_nobg.png";
import Logo from "../assets/Logo.png";

const NavBar = () => {
    return (
        <div style={{ position: "sticky", top: "0px", zIndex: "50", opacity: "1" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ background: "transparent", boxShadow: "none" }}>
                    <Toolbar>
                    <img src={Logo} alt="not found" style={{ width: "50px" }} />
                        <div style={{
                           paddingLeft: "20px",
                            paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px"
                        }}>
                            <img src={GoldLogo} alt="not found" style={{ width: "90px" }} />
                        </div>
                        <Button style={{ borderRadius: 8, backgroundColor: "black" }} variant='contained' sx={{ marginLeft: "62rem" }}>CREW</Button>
                        <Button style={{ borderRadius: 8, backgroundColor: "black", marginLeft: "15px" }} variant='contained' > MAP</Button>
                        <Button style={{ borderRadius: 8, backgroundColor: "black", marginLeft: "15px" }} variant='contained' >FAQ</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;