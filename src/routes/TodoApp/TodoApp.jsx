import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import data from "./data.json";

export default function TodoApp() {
    const [todo, setTodo] = useState(data);
    const [filteredTodo, setFilteredTodo] = useState(todo);

    return (
        // Background Container
        <div className="flex justify-center bg-very-dark-blue w-full h-full min-h-screen">
            <img
                src="assets/images/todo-app/bg-mobile-dark.jpg"
                alt="background"
                className="object-contain top-0 absolute md:hidden"
            />
            <img
                src="assets/images/todo-app/bg-desktop-dark.jpg"
                alt="background"
                className="object-contain top-0 absolute hidden md:block"
            />
            {/* Content Container */}
            <div className="flex relative flex-col items-center max-w-[400px] md:max-w-[600px] w-full p-10">
                {/* Header */}
                <Header />

                {/* Create new todo */}
                <CreateTodo
                    filteredTodo={filteredTodo}
                    setTodo={setTodo}
                    setFilteredTodo={setFilteredTodo}
                />

                {/* List of todos */}
                <TodoList
                    setTodo={setTodo}
                    todo={todo}
                    filteredTodo={filteredTodo}
                    setFilteredTodo={setFilteredTodo}
                />

                {/* Mobile Filter */}
                <div className="md:hidden w-full">
                    <Filter
                        todo={todo}
                        filteredTodo={filteredTodo}
                        setFilteredTodo={setFilteredTodo}
                    />
                </div>

                {/* Footer */}
            </div>
        </div>
    );
}
