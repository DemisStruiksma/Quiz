import React from 'react';
import { useNavigate } from 'react-router-dom';
import rawJson from '../data.json';


const Quiz = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [answer, setAnswer] = React.useState("");
    const [prevAnswer, setPrevAnswer] = React.useState("");
    const [points, setPoints] = React.useState(1);
    

    return (


        <div>
            {count}
            {answer}
            <div>
                <p>{rawJson.questions[count].question}</p>
                {rawJson.questions[count].options.map((item, i) => (
                 
                    <div onClick={(e) => {
                        setAnswer(item)
                    }} key={i}>
                        {item}
                    </div>
                ))}

            </div>

            <button onClick={(e) => {
                e.preventDefault();

                if(answer === "" || answer === prevAnswer){
                    alert("Please select one of the options")
                    return;
                }
                if(count !== 9){
                    setCount(count + 1);
                    setPrevAnswer(answer);
                    if(rawJson.questions[count].answer === answer) {
                        setPoints(points + 1);
                    } else {
                        return;
                    }
                } else {
                    navigate('/result', { state:points })
                }

                console.log(points)
                
            }
            }>Next</button>




        </div>
    )
}

export default Quiz