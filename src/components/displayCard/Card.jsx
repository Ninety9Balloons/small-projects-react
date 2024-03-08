/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ src, text, imgSrc }) {
    return (
        <Link to={src}>
            <div className="flex flex-col justify-between h-[300px] w-[200px] shadow-md rounded-lg bg-secondary p-1 hover:bg-accent-3 hover:scale-110 transition-all relative">
                <div className="w-full h-full object-cover">
                    <img
                        src={`/assets/images/${imgSrc}`}
                        alt={`${text} screenshot`}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="bg-gradient-to-t from-black to-gray rounded-b-lg w-full h-full absolute bottom-0 left-0 z-20 opacity-50"></div>
                <h2 className="text-xl font-bold text-white uppercase absolute bottom-0 z-20 m-2">
                    {text}
                </h2>
            </div>
        </Link>
    );
}

export default Card;
