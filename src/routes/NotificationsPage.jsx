import { useState } from "react";
import Item from "../NotificationsPage/components/Item";
import data from "../NotificationsPage/data.json";

function NotificationsPage() {
    const [unreadNumber, setUnreadNumber] = useState(0);
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setUnreadNumber(0);
        setClicked(true);
    }

    return (
        <div className="text-primary h-full">
            {/* Main Container */}
            <div className="px-4 py-6 max-w-[600px] mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h2 className="font-bold text-xl mr-4">
                            Notifications
                        </h2>
                        {/* Number of unread notifications */}
                        <div className="font-bold bg-secondary py-1 px-3 rounded-lg">
                            {unreadNumber}
                        </div>
                    </div>

                    {/* Button to mark all as read */}
                    <button
                        className="text-gray-300 text-sm"
                        onClick={() => handleClick()}
                    >
                        Mark all as read
                    </button>
                </div>

                {/* Items Container */}
                <div className="mt-5 flex flex-col gap-3">
                    {/* Item */}

                    {data.map((item) => (
                        <Item
                            key={item.name}
                            img={item.img}
                            name={item.name}
                            text={item.text}
                            event={item.event}
                            unread={item.unread}
                            time={item.time}
                            attached={item.attached}
                            imgAttached={item.imgAttached}
                            setUnreadNumber={setUnreadNumber}
                            clicked={clicked}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotificationsPage;
