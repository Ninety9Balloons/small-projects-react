import { useContext, useState } from "react";
import { CommentsContext } from "../context/Context";

/* eslint-disable react/prop-types */
function BottomButtons({ username, id }) {
    const { comments, setLoading } = useContext(CommentsContext);
    const [editing, setEditing] = useState(false);

    function handleDelete(e) {
        setLoading(true);

        function deleteComment(id, arr) {
            arr.forEach(function (item, index) {
                if (item.id == id) {
                    arr.splice(index, 1);
                } else if (item.replies && item.replies.length > 0) {
                    deleteComment(id, item.replies);
                }
            });
        }

        deleteComment(e.target.id, comments);

        setTimeout(() => {
            setLoading(false);
        }, 100);
    }

    function handleEdit(e) {
        setEditing(!editing);
        setLoading(true);

        function editComment(id, arr) {
            arr.forEach(function (item, index) {
                if (item.id == id) {
                    item.content = (
                        <textarea
                            className="w-full h-[100px] bg-secondary border rounded p-3 outline-none"
                            placeholder="Edit a comment..."
                            defaultValue={item.content}
                        ></textarea>
                    );
                } else if (item.replies && item.replies.length > 0) {
                    for (let i = 0; i < item.replies.length; i++) {
                        if (item.replies[i].id == id) {
                            item.replies[i].content = (
                                <textarea
                                    className="w-full h-[100px] bg-secondary border rounded p-3 outline-none"
                                    placeholder="Edit a comment..."
                                    defaultValue={item.replies[i].content}
                                ></textarea>
                            );
                            editComment(item.id, item.replies);
                        }
                    }
                }
            });
        }

        editComment(e.target.id, comments);

        setTimeout(() => {
            setLoading(false);
        }, 100);
    }

    return (
        <div>
            {username === "juliusomo" ? (
                <div className="flex gap-3">
                    <button
                        className="flex items-center gap-2 font-bold text-red-400"
                        onClick={(e) => handleDelete(e)}
                        id={id}
                    >
                        <img
                            src="assets/images/commentssection/icon-delete.svg"
                            alt="delete icon"
                        />
                        Delete
                    </button>
                    <button
                        className="flex items-center gap-2 font-bold text-accent"
                        onClick={(e) => handleEdit(e)}
                        id={id}
                    >
                        <img
                            src="assets/images/commentssection/icon-edit.svg"
                            alt="edit icon"
                        />
                        {editing ? "Save" : "Edit"}
                    </button>
                </div>
            ) : (
                <button className="flex items-center gap-2 font-bold text-accent">
                    <img
                        src="assets/images/commentssection/icon-reply.svg"
                        alt="Reply icon"
                        className=""
                    />
                    Reply
                </button>
            )}
        </div>
    );
}

export default BottomButtons;
