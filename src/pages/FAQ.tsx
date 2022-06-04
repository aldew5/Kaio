import Question from "../components/Question";
import { Typography } from "@mui/material";

const FAQ = () => {

    return (
        <div style={{ paddingTop: "4rem", backgroundColor: "white", textAlign: "left" }}>
            <div style={{ marginLeft: "320px" }}>
                <div style={{ marginBottom: "2rem" }}>
                    <Typography variant="h4" color="black"><b>FAQ</b></Typography>
                </div>

                <Question
                    question={"What is Kaio?"}
                    response={`Kaio is a collection of 6,500 hand-drawn profile picture 
                            NFTs generated to fit our pirate-anime theme. Our core belief is to provide value 
                            to our holders by hosting exclusive events and creating other compelling perks. 
                            Our mission is to build a strong community that intertwines with the metaverse and the real world. `}
                />
                <Question
                    question={"What influenced the founding of Kaio?"}
                    response={`The birth of Kaio can be traced back to a simple DM in early 2022. Soon after, various 
                            members were recruited to contribute to building the project. Our team is multicultural; Nevertheless, 
                            what we all have in common is a love for web3 and anime. Most members have already worked on previous NFT projects 
                            and have gained fundamental experience managing a project. So, equipped with the power of mutual knowledge and impeccable 
                            teamwork, we will do our utmost to provide to our holders.`}
                />
                <Question
                    question={"What is the merch sale?"}
                    response={`The merch sale will be an event before the mint where we will sell gaming accessories such as mouse 
                            pads and custom keyboard keycaps. As a bonus, each person who purchases a limited stock bundle will automatically 
                            be whitelisted.`}
                />
                <Question
                    question={"What is the treasure hunt?"}
                    response={`The treasure hunt will span all continents and be part social experiment and part IRL quest. After the reveal, 
                            each holder will receive two fragments of a map. These fragments can then be burned in exchange for a coordinate in an area 
                            of your choosing. Aside from the coordinates, you will also receive a clue that will lead you to the treasure. More specific 
                            details will be disclosed at a date closer to the mint. `}
                />
                <Question
                    question={"How is the team using money raised from mint and royalties?"}
                    response={`The team will use 80% of the royalties and 10% of all money from the NFT sale to fund the treasure hunt. 
                            In addition, 20% of the funds raised will be directed towards accomplishing the roadmap. Then an unspecified percentage 
                            will be used to reward benefactors for believing and investing in us. The money raised from the merch sale will be directed at
                             marketing to increase brand influence. `}
                />
                <Question
                    question={'What rights will a holder have for the artwork of their NFT?'}
                    response={'Holders will get full commercial rights to your Kaio NFT.'}
                />
                <Question
                    question={'How do I keep up with the most recent updates?'}
                    response={`Most of the interaction with the community will be done through Twitter and Discord. We will also host 
                            Twitter spaces where you can put the team on a ‘hot seat’ and ask us questions.`}
                />
            </div>
        </div>

    )
}

export default FAQ;