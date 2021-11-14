import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
	const renderedTasks = tasks.map((task) => (
		<TaskCard
			// handleComplete={handleComplete}
			task={task}
			key={task.id}
		/>
	));

	return <div className="task-list">{renderedTasks}</div>;
};

export default TaskList;
