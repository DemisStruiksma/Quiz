import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const points = location.state;

    return (
        <div className="bg-gray-100 flex h-screen">
            <div className='container mx-auto my-10 bg-slate-50 px-12 py-20 rounded-xl shadow-xl'>
                <p className="text-xl">You've got <span className="font-bold">{points}</span> correct {points > 1 ? 'answers' : 'answer'} out of 10 questions! {points >= 6 ? '🎉' : '😥'}</p>

                <button className='bg-indigo-700 hover:bg-indigo-800 transition duration-150 ease-out hover:ease-in px-6 py-2 mt-8 text-white rounded-sm' onClick={() => navigate('/')}>Try again</button>
            </div>
        </div>
    )
}

export default Result