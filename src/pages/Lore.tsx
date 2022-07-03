import styles from "../styles/Lore.module.css";
import Boat from "../assets/boat.png";
import Rip from "../assets/first-rip-box-for-boat.png";
import Pirate from "../assets/kaio.png";
import PirateRip from "../assets/second-rip-box-for-captain.png";
import ThirdRip from "../assets/third-rip-box-for-group.png";
import Group from "../assets/group.png";
import { Dispatch, SetStateAction, useEffect } from "react";


interface LoreProps {
    imgEl: any;
    setLoaded: Dispatch<SetStateAction<boolean>>;
    loaded: boolean;
}

const Lore = ({ imgEl, setLoaded, loaded, }: LoreProps) => {

    const onImageLoaded = () => setLoaded(true);

    useEffect(() => {
        const imgElCurrent = imgEl.current;

        if (imgElCurrent) {
            imgElCurrent.addEventListener('load', onImageLoaded);
            return () => imgElCurrent.removeEventListener('load', onImageLoaded);
        }
    }, [imgEl]);


    return (
        <div style={{ color: "white", fontSize: "25px", marginTop: "110px" }}>
            <p style={{ textAlign: 'center' }}>
                The days of the sea have proven to be lucrative for some, <br />
                And a series of disappointments for others…
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
                            The ocean does not give way to anyone. And
                            the ships have come and gone in the waters
                            that don’t sleep, for the churning of the sea
                            never yield.
                        </p>
                        <p>
                            Years ago, towards the end of his life, a
                            pirate captain named “Kaio” known to be the
                            world’s greatest began executing his legacy.
                            He buried his treasure in an island far out in
                            the ocean, one has never traveled to. It is a
                            treasure that would complete a seafarer’s life.
                        </p>
                        <p>
                            Kaio created a map, one that would lead to
                            his buried treasure. But he also ripped that
                            map apart so one would have to piece it back
                            together. And he scattered it all around the
                            world, piece by piece, island by island, little by
                            little in his remaining years until all is gone.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", width: "700px", marginLeft: "400px", paddingBottom: "80px" }}>
                <p>
                    Except for a piece of clue…
                </p>
            </div>
            <div className={styles.container2}>
                <div style={{ display: "table-row", textAlign: 'left' }}>
                    <div style={{ display: "table-cell", width: "650px", paddingLeft: "200px" }}>
                        <p>
                            On his deathbed, he summoned all the people
                            he knew, from his crewmates to his friends, to
                            officers and common folks, of different species
                            and races, gathered for his last days. What
                            thought to be a farewell ceremony ended in an
                            announcement as he said,

                        </p>
                        <p>
                            “I buried my treasure in a land faraway, and
                            scattered the map around the world. But I tell
                            you this, my friends and foes, If you know
                            me well, you’ll find the pieces in all my
                            beloved places.”

                        </p>
                        <p>
                            The people cheered, the crewmates were
                            outraged, the announcement leveled the
                            competition. The news immediately spread
                            throughout the entire world. And what was
                            supposed to be a melancholic ending, ignited
                            a yet new beginning for the era of pirates.

                        </p>
                        <p>
                            As words spread, pirates from around the
                            world started their quest in search for the
                            pieces of the map. Some worked in groups,
                            some preferred to be alone. It was but a
                            series of friendships and betrayals, of hopes
                            and disappointments that stretched for years.

                        </p>
                    </div>
                    <div style={{ display: "table-cell", paddingLeft: "90px" }}>
                        <div style={{ position: "absolute" }}>
                            <img src={PirateRip} alt="not found" width="500px" />
                        </div>
                        <div style={{ zIndex: "100", position: "absolute", display: loaded ? "block" : "none" }}>
                            <img src={Pirate} ref={imgEl} alt="not found" width="500px" />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ paddingBottom: "50px" }}>
                But the brighter they burn the faster they burn out <br />
                And the news turned into myth
            </p>
            <div className={styles.container3}>
                <div style={{ display: "table-row", textAlign: 'left' }}>
                    <div style={{ display: "table-cell", width: "200px", paddingLeft: "150px", paddingRight: "100px" }}>
                        <p>
                            Rumors began that Kaio was lying. He was
                            old and sick and he treasured his comrades so
                            much to not tell a single one of them about
                            the treasure.

                        </p>
                        <p>
                            People started to convince themselves that it
                            was just a dying man’s mumbling. Or
                            perhaps they knew it was true, but they
                            wanted a reason to stop their fruitless chase.
                        </p>
                        <p>
                            A decade after his death, the first piece of
                            map was found, sealed in an empty whiskey
                            bottle, buried shallowly in a coast of his
                            hometown. It was just a single piece of paper,
                            not nearly the size of a palm. But it was
                            enough to rekindle the pirates’ dying fire.

                        </p>
                    </div>
                    <div style={{ display: "table-cell", textAlign: "left", width: "245px", paddingRight: "150px" }}>
                        <p>
                            The search once again awakened the
                            exhausted souls of the pirates. They began to
                            sharpen their weapons and lowered the sails
                            to venture the vastness of the ocean once
                            more and answer to the call of their fate.

                        </p>
                        <p>
                            6500 hopeful pirates from different
                            beginnings, chasing the same dream of
                            finding the treasure, ready to face the
                            dangers of the ocean, fueled only by hope
                            and curiosity.

                        </p>
                        <p>
                            Maybe. the treasure will be found. Maybe it
                            will be buried forever. But uncertainty is
                            only but one part of the journey. That’s
                            what it means to be a pirate.

                        </p>
                    </div>
                </div>
            </div>
            <p style={{ paddingBottom: "100px" }}>
                Are you ready, mate?
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