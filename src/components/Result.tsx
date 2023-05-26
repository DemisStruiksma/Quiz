import { useLocation } from "react-router-dom";


const Result = () => {
    const location = useLocation();
    const points = location.state;


    return (


        <div>
            {points} out of 10
        </div>
    )
}

export default Result