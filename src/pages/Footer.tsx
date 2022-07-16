import styles from "../styles/Footer.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTok from "../assets/tiktok-brown.png";
import Discord from "../assets/discord-brown.png";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div style={{ display: 'table', paddingTop: '150px', paddingLeft: "200px" }}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "200px" }}>
                        <div className={styles.button}
                            onClick={() => { navigate("/privacy"); }}>
                            Privacy Policy
                        </div>
                    </div>
                    <div style={{ display: "table-cell" }}
                        onClick={() => { navigate("/terms"); }}>
                        <div className={styles.button}>
                            Terms of Use
                        </div>
                    </div>
                    <div style={{ display: "table-cell", paddingLeft: "400px", paddingRight: "20px" }}>
                        <IconButton sx={{ color: "#837456" }}>
                            <InstagramIcon
                                onClick={() => { window.location.href = "https://www.instagram.com/nft_kaio/"; }
                                } />
                        </IconButton>
                    </div>
                    <div style={{ display: "table-cell", paddingRight: "20px" }}>
                        <IconButton>
                            <TwitterIcon
                                onClick={() => { window.location.href = "https://twitter.com/Nft_Kaio"; }
                                } />
                        </IconButton>
                    </div>
                    <div style={{ display: "table-cell", paddingRight: "20px" }}>
                        <IconButton>
                            <img src={TikTok} height="20px"
                                onClick={() => { window.location.href = "https://twitter.com/Nft_Kaio"; }
                                } />
                        </IconButton>
                    </div>
                    <div style={{ display: "table-cell" }}>
                        <IconButton>
                            <img src={Discord} height="20px"
                                onClick={() => { window.location.href = "https://www.tiktok.com/@nft_kaio"; }
                                } />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
