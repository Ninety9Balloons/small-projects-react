import { useEffect, useState } from "react";
import CommentCard from "./components/CommentCard";
import data from "./data.json";

function CommentsSection() {
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(data);
        setComments(data);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-primary h-full p-10">
            {/* Main */}
            <div className="w-[350px]">
                {/* Comment Cards */}
                <ul className="flex flex-col items-center">
                    {/* Loop through the comments in the data and generate a card for each comment */}
                    {comments?.comments.map((item) => (
                        <CommentCard
                            width="350px"
                            key={item.id}
                            username={item.user.username}
                            createdAt={item.createdAt}
                            content={item.content}
                            score={item.score}
                            comments={comments}
                            child={item.replies}
                        />
                    ))}
                </ul>
            </div>

            {/*  Add a comment */}
            <form className="w-[350px] bg-secondary mt-5 rounded p-3">
                {/* Text box */}
                <textarea
                    className="w-full h-[100px] bg-secondary border rounded p-3 outline-none"
                    placeholder="Add a comment..."
                />

                {/* Bottom bar */}
                <div className="flex mt-3 justify-between items-center">
                    {/* Avatar */}
                    <img
                        src={`assets/images/commentssection/avatars/image-juliusomo.png`}
                        alt="User Avatar"
                        className="w-9 h-9"
                    />

                    {/* Send button */}
                    <button className="py-2 px-4 bg-accent-3 rounded-lg">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CommentsSection;
