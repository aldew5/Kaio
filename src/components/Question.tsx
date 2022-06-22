import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState, useEffect } from "react";
import styles from "../styles/Question.module.css";

interface QuestionProps {
    question: string;
    response: string;
}

const Question = ({ question, response }: QuestionProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [mouse, setMouse] = useState<boolean>(false);

    const handleTab = (e: any) => {
        if (e.key === "Tab" && mouse) {
            setOpen(!open);
            console.log("HI");
        }
    }

    // add the event listener (for key presses)
    useEffect(() => {
        window.addEventListener('keyup', handleTab);
        return () => {
            window.removeEventListener('keyup', handleTab);
        };
    });

    return (
        <div style={{ width: "700px", marginBottom: "2rem", color: "white" }}
            onMouseEnter={() => { setMouse(true) }}
            onMouseLeave={() => { setMouse(false) }}>
            <div style={{ float: "right", marginRight: "-10px" }}>
                {(open) ?
                    <ArrowDropUpIcon className={styles.arrow} onClick={() => { setOpen(!open) }} /> :
                    <ArrowDropDownIcon className={styles.arrow} onClick={() => { setOpen(!open) }} />
                }
            </div>
            <div className={styles.arrow} onClick={() => { setOpen(!open) }}>
                {question}
            </div>
            {(open) ?
                <div style={{ marginTop: "1rem" }}>
                    {response}
                </div>
                :
                <></>
            }
            <hr style={{ width: "700px" }} />
        </div>
    )
}

export default Question;