import { FormLabel } from 'react-bootstrap';

const TaskCard = ({ task, handleComplete, classComplete }) => {
	const handleTask = (e) => {
		handleComplete(task);
	};
	console.log(classComplete);

	return (
		<div id={task.id} className="task-card">
			<li>{task['task_item']}</li>
			<label className="checkbox-container">
				<input
					id="checkbox"
					type="checkbox"
					onChange={handleTask}
				></input>
				<span className="checkmark"></span>
			</label>
		</div>
	);
};

export default TaskCard;
