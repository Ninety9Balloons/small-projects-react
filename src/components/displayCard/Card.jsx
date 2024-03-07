/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ src, text }) {
    return (
        <Link to={src}>
            <div className="h-[300px] w-[200px] shadow-md rounded-lg">
                {text}
            </div>
        </Link>
    );
}

export default Card;
