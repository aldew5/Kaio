import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";

interface QuestionProps {
    question: string;
    response: string;
}

const Question = ({ question, response }: QuestionProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div style={{ width: "700px", marginBottom: "2rem" }}>
            <div style={{ float: "right", marginRight: "-10px" }}>
                {(open) ?
                    <ArrowDropUpIcon onClick={() => { setOpen(!open) }} /> :
                    <ArrowDropDownIcon onClick={() => { setOpen(!open) }} />
                }
            </div>
            <div>
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