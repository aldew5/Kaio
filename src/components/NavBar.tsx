import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoldLogo from "../assets/Gold.png";

const NavBar = () => {
    return (
        <div style={{ position: "sticky", top: "0px", zIndex: "50", opacity: "1" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{ background: "transparent", boxShadow: "none" }}>
                    <Toolbar>
                        <div style={{ opacity: "1" }}>
                            <img src={GoldLogo} alt="not found" style={{ width: "90px" }} />
                        </div>
                       
                        <Button style={{borderRadius: 8,backgroundColor:"black"}} variant='contained' sx={{ marginLeft: "62rem" }}>CREW</Button>
                        <Button style={{borderRadius: 8,backgroundColor:"black", marginLeft: "15px"}} variant='contained' >FAQ</Button>
                        <Button style={{borderRadius: 8,backgroundColor:"black", marginLeft: "15px"}} variant='contained' ><InstagramIcon /></Button>
                        <Button style={{borderRadius: 8,backgroundColor:"black", marginLeft: "15px"}} variant='contained' ><TwitterIcon /></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;