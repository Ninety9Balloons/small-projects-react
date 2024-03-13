import { useState } from "react";

/* eslint-disable react/prop-types */
function ChildCommentCard(props) {
    const [score, setScore] = useState(props.score);

    return (
        //   Main
        <li
            className={`flex flex-col bg-secondary rounded-md w-[${props.width}] p-3`}
        >
            {/* Top info section */}
            <div className="flex items-center gap-5 mb-3">
                {/* Avatar */}
                <img
                    src={`assets/images/commentssection/avatars/image-${props.username}.png`}
                    alt=""
                    className="w-7 h-7"
                />

                {/* Name */}
                <h2 className="font-bold text-accent flex items-center">
                    {props.username}

                    {/* You are user? */}
                    {props.username === "juliusomo" ? (
                        <span className="ml-2 bg-accent-3 px-1 py-[1px] text-xs text-primary rounded-sm">
                            you
                        </span>
                    ) : (
                        ""
                    )}
                </h2>

                {/* Time */}
                <p>{props.createdAt}</p>
            </div>

            {/* Comment Body */}
            <p className="mb-3">
                <span className="font-bold text-accent">@{props.replyTo}</span>{" "}
                {props.content}
            </p>

            {/* Bottom section */}
            <div className="flex justify-between">
                {/* Score */}
                <div className="flex bg-accent-3 rounded-lg ">
                    <button
                        className="w-[33%] py-1 px-2"
                        onClick={() => setScore(score + 1)}
                    >
                        +
                    </button>
                    <p className="w-[33%] flex justify-center py-1 px-2 font-bold text-accent">
                        {score}
                    </p>
                    <button
                        className="w-[33%] py-1 px-2"
                        onClick={() => setScore(score - 1)}
                    >
                        -
                    </button>
                </div>

                {/* Bottom buttons */}
                {props.username === "juliusomo" ? (
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 font-bold text-red-400">
                            <img
                                src="assets/images/commentssection/icon-delete.svg"
                                alt="delete icon"
                            />
                            Delete
                        </button>
                        <button className="flex items-center gap-2 font-bold text-accent">
                            <img
                                src="assets/images/commentssection/icon-edit.svg"
                                alt="edit icon"
                            />
                            Edit
                        </button>
                    </div>
                ) : (
                    <button className="flex items-center gap-2 font-bold text-accent">
                        <img
                            src="assets/images/commentssection/icon-reply.svg"
                            alt=""
                            className=""
                        />
                        Reply
                    </button>
                )}
            </div>
        </li>
    );
}

export default ChildCommentCard;
