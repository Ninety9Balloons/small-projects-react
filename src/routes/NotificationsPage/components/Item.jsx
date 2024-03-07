import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Item(props) {
    const [unread, setUnread] = useState(true);

    useEffect(() => {
        props.setUnreadNumber((prevState) => prevState + 1);
        if (props.clicked) {
            setUnread(false);
            props.setUnreadNumber(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.clicked]);

    function handleClick() {
        if (unread) {
            props.setUnreadNumber((prevState) => prevState - 1);
        }

        setUnread(false);
    }

    return (
        <div
            onClick={() => handleClick()}
            className={
                unread
                    ? "bg-secondary rounded-lg p-4 flex flex-col cursor-pointer hover:bg-accent-3 transition-all"
                    : "rounded-lg p-4 flex flex-col hover:bg-accent-3 transition-all"
            }
        >
            <div className="flex flex-wrap">
                <div className="flex w-full">
                    {/* Avatar */}
                    <img
                        src={`/assets/images/notifications/avatar-${props.img}.webp`}
                        alt={`${props.name} avatar`}
                        className="w-10 h-10 mr-4"
                    />

                    {/* Hero container */}
                    <div className="flex flex-wrap flex-1">
                        <div className="flex justify-between w-full">
                            {/* Text */}
                            <p>
                                {/* Name */}
                                <span className="font-bold mr-2">
                                    {props.name}
                                </span>

                                {/* Action */}
                                <span className="text-primary">
                                    {props.text}{" "}
                                </span>

                                {/* item in question */}
                                <span className="font-bold text-link">
                                    {props.event}
                                </span>

                                {/* Unread status */}
                                {unread ? (
                                    <span className="bg-red-500 w-2 h-2 rounded-full inline-block ml-2"></span>
                                ) : (
                                    ""
                                )}
                            </p>

                            {/* Attached smaller images */}
                            <img
                                src={props.imgAttached}
                                alt="Attached picture"
                                className={
                                    props.imgAttached === ""
                                        ? "hidden"
                                        : "w-11 h-11 ml-4"
                                }
                            />
                        </div>

                        {/* How long ago */}
                        <p className="text-gray-300 text-sm basis-full">
                            {props.time}
                        </p>

                        {/* Attached larger item */}
                        <p
                            className={
                                props.attached === ""
                                    ? "hidden"
                                    : "text-sm border-1 border-primary border rounded-lg p-3 text-gray-200 mt-2 basis-full"
                            }
                        >
                            {props.attached}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
