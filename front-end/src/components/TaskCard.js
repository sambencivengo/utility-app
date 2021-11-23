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
					? {
							backgroundColor: '#9c9c9c',
							color: '#c1c1c1',
							maxWidth: '70%',
							fontStyle: 'italic',
					  }
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
				{/* TERNARY CONDITIONAL TO RENDER DLETE BUTTON IF THE TASK.COMPLETED_STATUS IS TRUE */}
			</label>
		</div>
	);
};

export default TaskCard;
