import React from 'react';
import { useNavigate } from 'react-router-dom';
import rawJson from '../data.json';


const Quiz = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    const [answer, setAnswer] = React.useState("");
    const [points, setPoints] = React.useState(1);

    const nextQuestion = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (answer === "") {
            alert("Please select one of the options")
            return;
        }
        if (count !== rawJson.questions.length - 1) {
            console.log(rawJson.questions.length)
            setCount(count + 1);
            setAnswer("");
            if (rawJson.questions[count].answer === answer) {
                setPoints(points + 1);
            } else {
                return;
            }
        } else {
            navigate('/result', { state: points })
        }
    };

    return (
        <div className='bg-gray-100 flex h-screen'>
            <div className='container mx-auto my-10 bg-slate-50 px-12 py-20 rounded-xl shadow-xl'>
                <h2 className='text-3xl font-bold mb-6'>{rawJson.questions[count].question}</h2>

                <div className='flex space-x-6'>
                    {rawJson.questions[count].options.map((item, i) => (
                        <button className={'w-1/2 text-center py-4 rounded-xl shadow-xl cursor-pointer text-white bg-indigo-500 hover:bg-indigo-700 transition duration-150 ease-out hover:ease-in focus:outline-none focus:ring focus:ring-violet-300 focus:bg-indigo-800'}
                            onClick={() => {
                                setAnswer(item)
                            }} key={i}>
                            {item}
                        </button>
                    ))}
                </div>

                <button className='bg-indigo-700 hover:bg-indigo-800 transition duration-150 ease-out hover:ease-in px-6 py-2 mt-8 text-white rounded-sm'
                    onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )
}

export default Quiz