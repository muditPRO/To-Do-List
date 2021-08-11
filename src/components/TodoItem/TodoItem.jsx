import UncheckIcon from "./../UncheckIcon";
import CheckIcon from "./../CheckIcon";
import DeleteIcon from "./../DeleteIcon";

import "./TodoItem.css";

const TodoItem = ({ index, todo, theme, toggleTodo, deleteTodo }) => {
	return (
		<div
			className='todoitem'
			style={
				todo.done
					? { borderColor: theme.accent, opacity: "0.5" }
					: { borderColor: theme.header }
			}>
			<div onClick={() => toggleTodo(index)} className='icon-box'>
				{todo.done ? (
					<CheckIcon color={theme.color} />
				) : (
					<UncheckIcon color={theme.color} />
				)}
			</div>
			<div className='text' style={{ color: theme.color }}>
				{todo.text}
			</div>
			<div onClick={() => deleteTodo(index)} className='icon-box'>
				<DeleteIcon color={theme.color} />
			</div>
		</div>
	);
};

export default TodoItem;
