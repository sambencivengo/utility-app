import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';

const TaskCard = ({ task, handleComplete }) => {
	const handleTask = (e) => {
		handleComplete(task);
	};

	return (
		<div
			id={task.id}
			className="task-card"
			style={
				task.completed_status
					? { backgroundColor: 'red', width: 150 }
					: {}
			}
		>
			<li>{task.task_item}</li>
			<label className="checkbox-container">
				<input
					id="checkbox"
					type="checkbox"
					onChange={handleTask}
					checked={task.completed_status}
				></input>
				<span className="checkmark"></span>
			</label>
		</div>
	);
};

export default TaskCard;
