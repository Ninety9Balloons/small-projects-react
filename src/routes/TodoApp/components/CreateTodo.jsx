/* eslint-disable react/prop-types */
export default function CreateTodo({ filteredTodo, setTodo, setFilteredTodo }) {
    // Add a new item to the Todo List and reset the input field after submitting
    function handleSubmit(e) {
        e.preventDefault();

        const newArray = [
            ...filteredTodo,
            {
                item: e.target.elements.todoInput.value,
                completed: false,
                id: Math.floor(Math.random() * 1000).toString(),
            },
        ];
        setFilteredTodo(newArray);
        setTodo(newArray);

        e.target.elements.todoInput.value = "";
    }

    return (
        <div className="bg-very-dark-desaturated-blue w-full rounded mt-5 shadow-xl">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex items-center p-2"
            >
                <div className="border-[1px] border-light-grayish-blue rounded-full w-5 h-5 mx-2"></div>
                <input
                    type="text"
                    id="todoInput"
                    placeholder="Create a new todo..."
                    className="text-light-grayish-blue outline-none p-1 bg-transparent"
                />
            </form>
        </div>
    );
}
