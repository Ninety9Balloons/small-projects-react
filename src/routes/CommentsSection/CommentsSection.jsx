import { useEffect, useState } from "react";
import CommentCard from "./components/CommentCard";
import data from "./data.json";

function CommentsSection() {
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(data);
        setComments(data);
    }, []);

    // Variable for child comments
    let childInfo;

    // Loop through the parent comments and find ones with child comments
    for (let i = 0; i < comments?.comments.length; i++) {
        childInfo = comments?.comments[i]?.replies;
    }

    return (
        <div className="flex justify-center text-primary h-full p-10">
            {/* Main */}
            <div className="w-[350px]">
                {/* Comment Cards */}
                <ul className="flex flex-col gap-5 items-center">
                    {comments?.comments.map((item) => (
                        <CommentCard
                            width="350px"
                            key={item.id}
                            username={item.user.username}
                            createdAt={item.createdAt}
                            content={item.content}
                            score={item.score}
                            comments={comments}
                        />
                    ))}

                    {/* Child comments */}
                    <div className="flex justify-end w-full">
                        <ul className="flex flex-col gap-5 border-l-2 pl-12  border-slate-600">
                            {childInfo?.map((item) => (
                                <CommentCard
                                    width="300px"
                                    key={item.id}
                                    username={item.user.username}
                                    createdAt={item.createdAt}
                                    content={item.content}
                                    score={item.score}
                                    comments={comments}
                                />
                            ))}
                        </ul>
                    </div>
                </ul>

                {/* Add comment section */}
                <div></div>
            </div>
        </div>
    );
}

export default CommentsSection;
