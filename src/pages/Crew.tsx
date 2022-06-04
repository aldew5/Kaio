import Biography from "../components/Biography";


const Crew = () => {
    return (
        <div style={{ paddingBottom: "2rem", paddingTop: "2rem", backgroundColor: "#EEEEEE", justifyContent: "center", height: "755px" }}>
            <div style={{
                textAlign: "center", justifyContent: "center", marginLeft: "120px", paddingTop: "40px",
                fontFamily: 'Koulen cursive', fontSize: "40px"
            }}>
                <b>Meet Our Team</b>
            </div>
            <div style={{ paddingTop: "2rem", display: "flex", marginLeft: "100px", justifyContent: "center" }}>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={"Does all things marketing. Focuses on increasing brand recognition and establishing collaborations with various partners. One-piece fanboy. "}
                        image={"Vlad"}
                        position={"Marketing"}
                        name={"Vlad"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={`Oversees and manages Kaio’s socials. Strives to make the Kaio community an inclusive 
                        space for all and values interacting with holders. Devoted Boston Celtics fan.`}
                        image={"Ira"}
                        position={"Community manager"}
                        name={"Ira"}
                    />
                </div>
                <div style={{ display: "flex", float: "left", paddingLeft: "1.5rem" }}>
                    <Biography
                        text={`Responsible for most of the design aspects of the collection. 
                        Has ample experience in design and illustration achieved by working in various design jobs. Loves anime.`}
                        image={"Yang"}
                        position={"Design"}
                        name={"Yang"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Crew;