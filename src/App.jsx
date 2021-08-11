import { useState } from "react";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoItem from "./components/TodoItem/TodoItem";

import { lightTheme, darkTheme } from "./themes";
import "./App.css";

function App() {
	const [theme, setTheme] = useState(lightTheme);
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos") || "[]")
	);

	const toggleTheme = () => {
		const newTheme = theme === lightTheme ? darkTheme : lightTheme;
		setTheme(newTheme);
	};

	const addItem = (todo) => {
		localStorage.setItem("todos", JSON.stringify([...todos, todo]));
		setTodos([...todos, todo]);
	};

	const toggleTodo = (index) => {
		let newTodos = [...todos];
		newTodos[index].done = !newTodos[index].done;
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const deleteTodo = (index) => {
		let newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	return (
		<div className='App' style={{ backgroundColor: theme.backgroundColor }}>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Input theme={theme} addItem={addItem} />
			{todos &&
				todos.map((todo, index) => {
					return (
						<TodoItem
							key={index}
							index={index}
							todo={todo}
							theme={theme}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
						/>
					);
				})}
		</div>
	);
}

export default App;
