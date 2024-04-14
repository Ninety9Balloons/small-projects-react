/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Filter({ todo, setFilteredTodo }) {
    const [filter, setFilter] = useState("All");

    // Change what the filter is
    function handleChangeFilter(e) {
        setFilter(e.target.textContent);
    }

    // When the filter changes, loop through all the todos and filter out items depending on which filter is selected
    useEffect(() => {
        let filteredArr = [];

        for (let i = 0; i < todo.length; i++) {
            if (filter === "All") {
                filteredArr.push(todo[i]);
            } else if (filter === "Active" && !todo[i].completed) {
                filteredArr.push(todo[i]);
            } else if (filter === "Completed" && todo[i].completed) {
                filteredArr.push(todo[i]);
            }
        }
        setFilteredTodo(filteredArr);
    }, [filter]);

    return (
        <div
            className="flex bg-very-dark-desaturated-blue w-full rounded mt-5 md:mt-0 md:gap-6 text-very-dark-grayish-blue font-semibold 
      w-full justify-around p-3"
        >
            <button
                onClick={handleChangeFilter}
                className={`transition-all  ${
                    filter === "All" ? "text-primary-todo" : "hover:text-white"
                }`}
            >
                All
            </button>
            <button
                onClick={handleChangeFilter}
                className={`transition-all ${
                    filter === "Active"
                        ? "text-primary-todo"
                        : "hover:text-white"
                }`}
            >
                Active
            </button>
            <button
                onClick={handleChangeFilter}
                className={`transition-all ${
                    filter === "Completed"
                        ? "text-primary-todo"
                        : "hover:text-white"
                }`}
            >
                Completed
            </button>
        </div>
    );
}
