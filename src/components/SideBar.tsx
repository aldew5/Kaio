import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SideBar = () => {
    return (
        <div style={{position: "sticky", top: "70px", marginRight:"10px", float:'left'}}>
            <div style={{
                width: "6px", height: "200px", backgroundColor: "black",
                zIndex: "100", marginLeft: "10px"
            }}>

            </div>
            <div>
                <TwitterIcon />
            </div>
            <div>
                <InstagramIcon/>
            </div>
            <div style={{
                width: "6px", height: "200px", backgroundColor: "black",
                zIndex: "100", marginLeft: "10px", display: "flex", float: "left"
            }}></div>
        </div>

    )
}

export default SideBar;