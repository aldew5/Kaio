import styles from "../styles/Lore.module.css";
import Boat from "../assets/boat.png";
import Rip from "../assets/first-rip-box-for-boat.png";
import Pirate from "../assets/kaio.png";
import PirateRip from "../assets/second-rip-box-for-captain.png";
import ThirdRip from "../assets/third-rip-box-for-group.png";
import Group from "../assets/group.png";


const Lore = () => {
    return (
        <div style={{ color: "white", fontSize: "25px", marginTop: "110px" }}>
            <p style={{ textAlign: 'center' }}>
                The days of the sea have proven to be lucrative for some, <br />
                and a series of disappointments for others...
            </p>
            <div className={styles.container}>
                <div style={{ display: "table-row" }}>
                    <div style={{ width: "650px", display: "table-cell" }}>
                        <div style={{ position: "absolute" }}>
                            <img src={Rip} alt="not found" width="600px" />
                        </div>
                        <div style={{ zIndex: "100", position: "absolute" }}>
                            <img src={Boat} alt="not found" width="600px" />
                        </div>
                    </div>

                    <div style={{ display: "table-cell", paddingTop: "100px", paddingRight: "150px", textAlign: "left" }}>
                        <p>
                            Years ago, towards the end of his life, a pirate captain once thought to be the world’s greatest,
                            began implementing his legacy. He buried treasure on an island far out in the ocean, one no one has ever
                            traveled to, treasure that would complete a seafarer’s life.
                        </p>
                        <p>
                            The treasure, of course, could not be given away
                            nor revealed in an easy manner. That is why Kaio decided to create a map, one that would lead to the treasure, and ripped
                            it apart so one would have to piece it back together to find the location of his loot.
                        </p>
                        <p>
                            He spent the remaining years of his life traveling the world, scattering the pieces of the map around various ports and cities and landmarks,
                            with not even his crewmates knowing of the location. The treasure, of course, was already buried where it would remain for many years.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", width: "700px", marginLeft: "400px" }}>
                <p>
                    When Kaio left this world, his senior deckhand was told of the first clue,
                    one that would lead to the first piece of the map...
                </p>
            </div>
            <div className={styles.container2}>
                <div style={{ display: "table-row", textAlign: 'left' }}>
                    <div style={{ display: "table-cell", width: "650px", paddingLeft: "200px" }}>
                        <p>
                            The deckhand was told to tell other crewmates of other ships, but pirates can be sneaky and he thought to keep the secret to himself.
                            If it was not for another crewmate overhearing him talking to himself about buried treasure, the deckhand might have succeeded.
                        </p>
                        <p>
                            As word spread, pirates from around the world began implementing their search for the pieces of the map. They scoured far and wide,
                            yet no one had been able to find the first piece, let alone complete the map. It was not until years later, when one pirate captain ventured into a
                            jungle temple on the southern coast of a remote island that he found the first piece, yet it turned out to be a fake.
                        </p>
                        <p>
                            However, from here, the journey for Kaio’s treasure truly began, and as more pirates began finding more clues to where pieces of the map were, the race to finish became more
                            competitive than ever. Battles on the sea on the location of these clues took place frequently, and those who were not truly geared towards finding the
                            treasure soon succumbed to the pressure and gave up. Notorious pirate captains seemed to shy away from even the reward that the treasure promised, for the
                            road ahead was not easy. This motivated other pirates even more however, and the hunt for the treasure ramped up even more. Yet, many others continued to try,
                            but pieces of the true map could not be found.
                        </p>
                        <p>
                            As the map remains unfinished, and the alluring loot of Kaio’s treasure is still available, only pirates bold enough to venture out into waters unknown will be rewarded with
                            what lies at the end of this adventure.
                        </p>
                    </div>
                    <div style={{ display: "table-cell", paddingLeft: "90px" }}>
                        <div style={{ position: "absolute" }}>
                            <img src={PirateRip} alt="not found" width="500px" />
                        </div>
                        <div style={{ zIndex: "100", position: "absolute" }}>
                            <img src={Pirate} alt="not found" width="500px" />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ paddingBottom: "100px" }}>
                Are ye ready mate?
            </p>
            <div style={{ paddingBottom: "900px" }}>
                <div style={{ position: "absolute" }}>
                    <img src={ThirdRip} alt="not found" height="800px" width="1440px" />
                </div>
                <div style={{ zIndex: "100", position: "absolute" }}>
                    <img src={Group} alt="not found" width="1440px" />
                </div>
            </div>
        </div>
    )
}

export default Lore;