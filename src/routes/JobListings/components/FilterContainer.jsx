/* eslint-disable react/prop-types */
export default function FilterContainer({
    filterTags,
    setFilterTags,
    allData,
    setJobData,
}) {
    // Clears all filter tags
    function handleClearClick() {
        setFilterTags([]);
        setJobData(allData);
    }

    // Clears only the selected tag from the filter array
    function handleXClick(e) {
        setFilterTags(filterTags.filter((item) => item !== e.target.id));
    }

    return (
        <div
            className={`${
                filterTags.length === 0 ? "hidden" : "flex"
            } flex-wrap w-[300px] md:w-[600px] lg:w-[1000px] bg-white p-3 rounded 
      shadow-[0_5px_30px_-10px_rgba(91,164,164,0.5)] -translate-y-14 -mb-12`}
        >
            {/* Left side Tags */}
            <div className="flex-1 w-full flex flex-wrap gap-3">
                {filterTags.map((item) => (
                    <button
                        className="flex cursor-pointer"
                        key={item}
                        id={item}
                        onClick={(e) => handleXClick(e)}
                    >
                        <p
                            className="bg-tablets text-primary-jobs font-bold px-2 rounded-l cursor-pointer"
                            id={item}
                        >
                            {item}
                        </p>
                        <img
                            src="/assets/images/joblistings/images/icon-remove.svg"
                            id={item}
                            className="bg-primary-jobs hover:bg-very-dark-grayish-cyan transition-all px-2 py-1 h-full rounded-r"
                        />
                    </button>
                ))}
            </div>

            {/* Right side Clear */}
            <div className="flex items-center">
                <p
                    className="text-primary-jobs font-bold px-2 cursor-pointer hover:underline hover:brightness-110 transition-all"
                    onClick={handleClearClick}
                >
                    Clear
                </p>
            </div>
        </div>
    );
}
