import styles from "../styles/Footer.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'table', paddingTop: '130px', paddingLeft: "200px" }}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "200px" }}>
                        <div className={styles.button}>
                            Privacy Policy
                        </div>
                    </div>
                    <div style={{ display: "table-cell" }}>
                        <div className={styles.button}>
                            Terms of Use
                        </div>
                    </div>
                    <div style={{ display: "table-cell", paddingLeft: "400px", width: "100px" }}>
                        <IconButton>
                            <InstagramIcon
                                onClick={() => { window.location.href = "https://www.instagram.com/nft_kaio/"; }
                                } />
                        </IconButton>
                    </div>
                    <div style={{ display: "table-cell" }}>
                        <IconButton>
                            <TwitterIcon
                                onClick={() => { window.location.href = "https://twitter.com/Nft_Kaio"; }
                                } />
                        </IconButton>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;