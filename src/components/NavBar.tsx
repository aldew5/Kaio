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
        <div style={{ position: "sticky", top: "0px", zIndex: "50", opacity: "0.7" }}>
            <Box component="div" sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#000000' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}>
                        </IconButton>
                        <div style={{ opacity: "1", marginLeft: "40rem" }}>
                            <img src={GoldLogo} alt="not found" style={{ width: "90px" }} />
                        </div>
                        <Button color="inherit" sx={{ marginLeft: "25rem" }}>CREW</Button>
                        <Button color="inherit" >FAQ</Button>
                        <Button color="inherit" ><InstagramIcon /></Button>
                        <Button color="inherit" ><TwitterIcon /></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;