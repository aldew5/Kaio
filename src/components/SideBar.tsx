import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

const SideBar = () => {
    return (
        <div style={{
            position: "fixed", top: "0px", marginTop: "150px", marginRight: "10px", 
            width: "25px", marginLeft: "40px"
        }}>
            <div style={{
                width: "2px", height: "200px", backgroundColor: "white",
                zIndex: "100", marginLeft: "10px", marginBottom: "10px"
            }}>
            </div>
            <div style={{ marginLeft: "-8px" }}>
                <IconButton sx={{color:"white"}}>
                    <TwitterIcon />
                </IconButton>
            </div>
            <div style={{ marginTop: "10px", marginLeft: "-8px" }}>
                <IconButton sx={{color:"white"}}>
                    <InstagramIcon />
                </IconButton>
            </div>

            <div style={{
                width: "2px", height: "300px", backgroundColor: "white",
                zIndex: "100", marginLeft: "10px", display: "flex", float: "left", marginTop: "10px"
            }}></div>
        </div>

    )
}

export default SideBar;