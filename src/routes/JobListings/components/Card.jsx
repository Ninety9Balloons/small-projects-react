/* eslint-disable react/prop-types */
export default function Card(props) {
    const tagArray = [];

    // Add the items from the role and level arrays into the tag array
    tagArray.push(props.role, props.level);

    // Loop through the languages and tools array and add each item to the tag array
    props.tools.forEach((item) => tagArray.push(item));
    props.languages.forEach((item) => tagArray.push(item));

    // If the tag filter array already contains the textcontent of the tag clicked, do nothing.
    // Else, add that tag to the array
    function handleClick(e) {
        if (props.filterTags.includes(e.target.textContent)) {
            return;
        } else {
            props.setFilterTags([...props.filterTags, e.target.textContent]);
        }
    }

    return (
        // Container
        <div
            className={`flex flex-col md:flex-row md:items-center relative h-[250px] md:h-[150px] w-[300px] md:w-[600px] lg:w-[1000px] bg-white p-3 rounded 
      shadow-[0_5px_30px_-10px_rgba(91,164,164,0.5)] + ${
          props.featured && "border-l-[5px] border-primary-jobs"
      }`}
        >
            {/* Floating Logo */}
            <div className="absolute lg:relative -top-[25px] lg:top-0 lg:mr-7">
                <img
                    src={props.logo}
                    alt={`${props.company} logo`}
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20"
                />
            </div>

            {/* Info Section */}
            <div className="flex flex-col md:flex-1 h-[60%] justify-between border-b-[1px] border-gray-300 py-4 md:py-0 md:border-0">
                {/* Name and optional tags */}
                <div className="flex gap-5 items-center">
                    {/* Name */}
                    <div className="text-primary-jobs font-bold">
                        {props.company}
                    </div>

                    {/* Optional Tags */}
                    <div className="flex uppercase items-center font-bold text-sm gap-2 h-full">
                        <p
                            className={`${
                                props.new
                                    ? "block text-white bg-primary-jobs rounded-xl px-2"
                                    : "hidden"
                            }`}
                        >
                            New!
                        </p>
                        <p
                            className={`${
                                props.featured
                                    ? "block text-white bg-very-dark-grayish-cyan rounded-xl px-2"
                                    : "hidden"
                            }`}
                        >
                            Featured
                        </p>
                    </div>
                </div>

                {/* Job Role */}
                <p className="font-bold text-very-dark-grayish-cyan hover:text-primary-jobs transition-all cursor-pointer">
                    {props.position}
                </p>

                {/* Posting info */}
                <div className="flex text-gray-400 text-sm font-medium gap-3">
                    {/* Posted Date */}
                    <p>{props.postedAt}</p>

                    {/* Job Type */}
                    <p>{props.contract}</p>

                    {/* Location */}
                    <p>USA only</p>
                </div>
            </div>

            {/* Tag Section */}
            <div className="flex flex-wrap md:w-[50%] lg:w-[40%] md:justify-self-end gap-4 h-[40%] items-center py-3 md:py-0">
                {/* Tags */}
                {tagArray.map((item) => (
                    <p
                        onClick={(e) => handleClick(e)}
                        key={item}
                        value={item}
                        className="bg-tablets hover:bg-primary-jobs text-primary-jobs hover:text-white transition-all font-bold px-2 rounded cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
