/* eslint-disable react/prop-types */
export default function LargeCard(props) {
    return (
        <div
            className={`w-full flex flex-col items-center justify-between gap-4 p-5 border-t-4 ${props.border}
      dark:bg-dark-desaturated-blue dark:hover:brightness-125 transition-all bg-light-grayish-blue hover:brightness-90 rounded-lg h-[200px] min-w-[200px] flex-1 cursor-pointer shadow`}
        >
            {/* Top subheader */}
            <div className="flex gap-2 items-center">
                {/* Icon */}
                <img
                    src={`/assets/images/socialmediadashboard/icon-${props.icon}.svg`}
                    alt={props.icon}
                    className="w-5 h-5"
                />

                {/* handle */}
                <p className="text-sm dark:text-desaturated-blue text-dark-grayish-blue font-bold">
                    {props.handle}
                </p>
            </div>

            {/* Followers */}
            <div className="text-center">
                {/* Number */}
                <p className="text-5xl font-bold">{props.followers}</p>

                {/* Text */}
                <p className="dark:text-desaturated-blue text-dark-grayish-blue tracking-widest uppercase text-sm">
                    Followers
                </p>
            </div>

            {/* Change */}
            <div className="flex items-center gap-1">
                {/* Icon */}
                <img
                    src={`/assets/images/socialmediadashboard/icon-${props.arrow}.svg`}
                    alt={`${props.arrow} arrow`}
                    className="w-2 h-2"
                />

                {/* Amount */}
                <p className={`font-bold text-xs text-${props.color}`}>
                    {props.change} Today
                </p>
            </div>
        </div>
    );
}
