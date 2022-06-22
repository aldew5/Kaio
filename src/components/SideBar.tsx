import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

const SideBar = () => {
    return (
        <div style={{
            marginTop: "150px", marginRight: "10px",
            width: "25px", marginLeft: "40px"
        }}>
            <div style={{
                width: "2px", height: "200px", backgroundColor: "white",
                zIndex: "100", marginLeft: "10px", marginBottom: "10px"
            }}>
            </div>
            <div style={{ marginLeft: "-8px" }}>
                <IconButton sx={{ color: "white" }}>
                    <TwitterIcon
                        onClick={() => { window.location.href = "https://twitter.com/Nft_Kaio"; }
                        } />
                </IconButton>
            </div>
            <div style={{ marginTop: "10px", marginLeft: "-8px" }}>
                <IconButton sx={{ color: "white" }}>
                    <InstagramIcon
                        onClick={() => { window.location.href = "https://www.instagram.com/nft_kaio/"; }
                        } />
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