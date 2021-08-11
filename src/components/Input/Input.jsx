import { useState } from "react";

import "./Input.css";

const Input = ({ theme, addItem }) => {
	const [todo, setTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem({ text: todo, done: false });
		setTodo("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='input'
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Add a todo'
				style={{
					background: "none",
					color: theme.color,
					borderColor: theme.header,
				}}
			/>{" "}
		</form>
	);
};

export default Input;
