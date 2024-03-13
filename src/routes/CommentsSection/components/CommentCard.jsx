import { useState } from "react";
import ChildCommentCard from "./ChildCommentCard";

/* eslint-disable react/prop-types */
function CommentCard(props) {
    const [score, setScore] = useState(props.score);

    return (
        <li>
            {/* // Main */}
            <div
                className={`flex flex-col bg-secondary mb-5 rounded-md w-[${props.width}] p-3`}
            >
                {/* Top info section */}
                <div className="flex gap-5 mb-3">
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
                <p className="mb-3">{props.content}</p>

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
            </div>

            {/* Child comments */}
            <div className="flex justify-end w-full">
                <ul className="flex flex-col gap-5 border-l-2 pl-12 border-slate-600">
                    {/* Loop through any child comments attached to a parent component and render it */}
                    {props.child?.map((item) => (
                        <ChildCommentCard
                            width="300px"
                            key={item.id}
                            replyTo={item.replyingTo}
                            username={item.user.username}
                            createdAt={item.createdAt}
                            content={item.content}
                            score={item.score}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );
}

export default CommentCard;
