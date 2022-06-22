import styles from "../styles/Footer.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'table', paddingTop: '130px', paddingLeft: "200px" }}>
                <div style={{ display: "table-row" }}>
                    <div style={{ display: "table-cell", width: "200px" }}>
                        Privacy Policy
                    </div>
                    <div style={{ display: "table-cell" }}>
                        Terms of Use
                    </div>
                    <div style={{ display: "table-cell", paddingLeft: "400px", width: "100px" }}>
                        <InstagramIcon
                            onClick={() => { window.location.href = "https://www.instagram.com/nft_kaio/"; }
                            } />
                    </div>
                    <div style={{ display: "table-cell" }}>
                        <TwitterIcon
                            onClick={() => { window.location.href = "https://twitter.com/Nft_Kaio"; }
                            } />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;