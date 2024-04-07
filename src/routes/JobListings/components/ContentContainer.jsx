/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";
import FilterContainer from "./FilterContainer";

export default function ContentContainer({ allData }) {
    const [jobData, setJobData] = useState(allData);
    const [filterTags, setFilterTags] = useState([]);

    // Whenever the tags filter is changed, rerun the setState for jobsData to update the listing
    // to display only jobs that match the selected tags
    useEffect(() => {
        let filteredArr = allData.filter((user) => {
            const tags = [user.level, user.role].concat(
                user.tools,
                user.languages
            );
            return filterTags.every((f) => tags.includes(f));
        });
        setJobData(filteredArr);
    }, [filterTags]);

    return (
        <div className="flex flex-col items-center w-full gap-10 py-10 relative">
            {/* Filter Container */}
            <FilterContainer
                filterTags={filterTags}
                setFilterTags={setFilterTags}
                allData={allData}
                setJobData={setJobData}
            />

            {/* Card */}
            {jobData.map((item) => (
                <Card
                    key={item.id}
                    company={item.company}
                    logo={item.logo}
                    new={item.new}
                    featured={item.featured}
                    position={item.position}
                    postedAt={item.postedAt}
                    contract={item.contract}
                    location={item.location}
                    languages={item.languages}
                    tools={item.tools}
                    role={item.role}
                    level={item.level}
                    filterTags={filterTags}
                    setFilterTags={setFilterTags}
                    setJobData={setJobData}
                    allData={allData}
                />
            ))}
        </div>
    );
}
