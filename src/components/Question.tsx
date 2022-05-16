import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface QuestionProps {
    question: string;
    response: string;
}

const Question = ({question, response}: QuestionProps) => {
    return (
        <div style={{width:"700px", marginBottom:"2rem"}}>
            <div style={{float: "right", marginRight:"-10px"}}>
                <ArrowDropDownIcon />
            </div>
            <div>
                {question}
                <hr style={{width:"700px"}} />
            </div>
        </div>
    )
}

export default Question;