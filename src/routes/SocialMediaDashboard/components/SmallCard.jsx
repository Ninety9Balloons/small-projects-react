/* eslint-disable react/prop-types */
export default function SmallCard(props) {
    return (
        <div
            className={`w-full flex flex-col items-center justify-between gap-4 p-5 
      dark:bg-dark-desaturated-blue rounded-lg h-[100px] min-w-[200px] flex-1 md:col-span-2 lg:col-span-1
      dark:hover:brightness-125 transition-all bg-light-grayish-blue hover:brightness-90 cursor-pointer shadow`}
        >
            {/* Top container */}
            <div className="flex justify-between items-center w-full">
                <p className="text-sm dark:text-desaturated-blue text-dark-grayish-blue font-bold">
                    {props.title}
                </p>

                {/* Icon */}
                <img
                    src={`/assets/images/socialmediadashboard/icon-${props.icon}.svg`}
                    alt={`${props.icon} icon`}
                    className="w-4 h-4"
                />
            </div>

            {/* Bottom container */}
            <div className="flex justify-between items-center w-full">
                {/* Number of views */}
                <p className="text-2xl font-bold">{props.number}</p>

                {/* Change */}
                <div className="flex gap-1 items-center">
                    <img
                        src={`/assets/images/socialmediadashboard/icon-${props.arrow}.svg`}
                        alt={`${props.arrow} arrow`}
                        className="w-2 h-2"
                    />

                    <p className={`text-xs ${props.color}`}>{props.change}</p>
                </div>
            </div>
        </div>
    );
}
