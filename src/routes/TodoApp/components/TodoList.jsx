/* eslint-disable react/prop-types */
import Filter from "./Filter";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoList({
    todo,
    setTodo,
    filteredTodo,
    setFilteredTodo,
}) {
    // React beautiful dnd drag and drop stuff
    const reorder = (filteredTodo, startIndex, endIndex) => {
        const result = Array.from(filteredTodo);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = ({ destination, source }) => {
        // reorder list
        if (!destination) return;

        setFilteredTodo(reorder(filteredTodo, source.index, destination.index));
    };

    // Click an item to change it's completed status
    function handleItemClick(e) {
        for (let i = 0; i < filteredTodo.length; i++) {
            if (filteredTodo[i].id === e.target.id) {
                setTodo(
                    [...filteredTodo],
                    (filteredTodo[i].completed = !filteredTodo[i].completed)
                );
            }
        }
    }

    // Click the X on an item to delete it
    function handleDelete(e) {
        for (let i = 0; i < filteredTodo.length; i++) {
            if (filteredTodo[i].item == e.target.getAttribute("data-text")) {
                const newArray = filteredTodo.filter(
                    (item) => item.item !== e.target.getAttribute("data-text")
                );
                setFilteredTodo(newArray);
                setTodo(newArray);
            }
        }
    }

    // Clear out all items that are marked as completed
    function handleClearCompleted() {
        for (let i = 0; i < filteredTodo.length; i++) {
            if (filteredTodo[i].completed === true) {
                const newArray = filteredTodo.filter(
                    (item) => item.completed !== true
                );
                setFilteredTodo(newArray);
                setTodo(newArray);
            }
        }
    }

    // Keep track of how many items on the list are still incomplete
    let incomplete = 0;

    filteredTodo.forEach((item) => {
        if (!item.completed) {
            incomplete++;
        }
    });

    return (
        <div className="bg-very-dark-desaturated-blue w-full rounded mt-5 text-dark-grayish-blue  transition-all shadow-xl">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <ul
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="divide-y divide-solid divide-dark-grayish-blue"
                        >
                            {filteredTodo.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    index={index}
                                    draggableId={item.id}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            className="flex items-center justify-between p-3 cursor-pointer"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div
                                                onClick={(e) =>
                                                    handleItemClick(e)
                                                }
                                                className="flex hover:text-white transition-all items-center"
                                            >
                                                {item.completed ? (
                                                    <span className="flex justify-center items-center bg-gradient-to-tl from-todo-bg-start to-todo-bg-end rounded-full w-5 h-5 mx-2">
                                                        <img
                                                            src="assets/images/todo-app/icon-check.svg"
                                                            alt="check"
                                                            className="w-3 h-3"
                                                        />
                                                    </span>
                                                ) : (
                                                    <span
                                                        id={item.id}
                                                        className="border-[1px] border-dark-grayish-blue hover:border-white transition-all rounded-full w-5 h-5 mx-2"
                                                    ></span>
                                                )}
                                                <p
                                                    id={item.id}
                                                    className={`${
                                                        item.completed &&
                                                        "line-through"
                                                    }`}
                                                >
                                                    {item.item}
                                                </p>
                                            </div>
                                            <img
                                                data-text={item.item}
                                                src="assets/images/todo-app/icon-cross.svg"
                                                alt="cross"
                                                className="w-4 h-4"
                                                onClick={(e) => handleDelete(e)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>

            <div className="flex justify-between items-center p-3 text-sm ">
                <p>{incomplete} items left</p>
                <div className="hidden md:block">
                    <Filter
                        todo={todo}
                        filteredTodo={filteredTodo}
                        setFilteredTodo={setFilteredTodo}
                    />
                </div>
                <button
                    className="hover:text-white transition-all"
                    onClick={handleClearCompleted}
                >
                    Clear Completed
                </button>
            </div>
        </div>
    );
}
