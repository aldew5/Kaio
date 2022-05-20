import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const SideBar = () => {
    return (
        <div style={{position: "sticky", top: "70px", marginRight:"20px", float:'left', width:"25px", marginLeft: "10px"}}>
            <div style={{
                width: "6px", height: "200px", backgroundColor: "black",
                zIndex: "100", marginLeft: "10px", marginBottom: "10px"
            }}>

            </div>
            <div style={{marginLeft:"1px"}}>
                <TwitterIcon />
            </div>
            <div style={{marginTop: "10px", marginLeft:"1px"}}>
                <InstagramIcon/>
            </div>
            <div style={{
                width: "6px", height: "400px", backgroundColor: "black",
                zIndex: "100", marginLeft: "10px", display: "flex", float: "left", marginTop: "10px"
            }}></div>
        </div>

    )
}

export default SideBar;