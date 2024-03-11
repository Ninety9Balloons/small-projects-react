/* eslint-disable react/prop-types */
function ChildCommentCard(props) {
    return (
        //   Main
        <li className="flex flex-col bg-secondary rounded-md w-[350px] p-3">
            {/* Top info section */}
            <div className="flex gap-5 mb-3">
                {/* Avatar */}
                <img
                    src={`assets/images/commentssection/avatars/image-${props.username}.png`}
                    alt=""
                    className="w-7 h-7"
                />

                {/* Name */}
                <h2 className="font-bold text-accent">{props.username}</h2>

                {/* Time */}
                <p>{props.createdAt}</p>
            </div>

            {/* Comment Body */}
            <p className="mb-3">{props.content}</p>

            {/* Bottom section */}
            <div className="flex justify-between">
                {/* Score */}
                <div className="flex bg-accent-3 rounded-lg ">
                    <button className="w-[33%] py-1 px-2">+</button>
                    <p className="w-[33%] py-1 px-2 font-bold text-accent">
                        {props.score}
                    </p>
                    <button className="w-[33%] py-1 px-2">-</button>
                </div>

                {/* Reply button */}
                <button className="flex items-center gap-2 font-bold text-accent">
                    <img
                        src="assets/images/commentssection/icon-reply.svg"
                        alt=""
                        className=""
                    />
                    Reply
                </button>
            </div>
        </li>
    );
}

export default ChildCommentCard;
