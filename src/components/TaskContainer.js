import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import TaskCard from './TaskCard';

const TaskContainer = () => {
	const url = 'http://localhost:4000/tasks';
	const [taskList, setTaskList] = useState([]);
	const [task, setTask] = useState({});
	const handleFormInput = (e) => {
		console.log(`Key = ${e.target.name} : Value = ${e.target.value}`);
		setTask({ [e.target.name]: e.target.value });
	};

	console.log(task);
	// POSTING NEW TASK
	const postFunction = () => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(task),
		})
			.then((r) => r.json())

			.then((newTask) => {
				console.log(newTask);
				setTaskList([...taskList, newTask]);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postFunction();
		e.target.reset();
	};

	// FETCHING INITIAL TASKLIST
	useEffect(() => {
		fetch(url)
			.then((r) => r.json())
			.then((data) => {
				setTaskList(data);
				console.log('From useEffect: ', data);
			});
	}, []);

	// DELETE TASK
	const handleDelete = (doomedTask) => {
		fetch(url + '/' + doomedTask.id, {
			method: 'DELETE',
		}).then(() => {
			const filteredTasks = taskList.filter(
				(task) => task.id !== doomedTask.id
			);
			setTaskList(filteredTasks);
		});
		console.log(doomedTask);
	};

	const renderedTasks = taskList.map((task) => {
		return (
			<TaskCard handleDelete={handleDelete} task={task} key={task.id} />
		);
	});

	return (
		<div className="task-container">
			{renderedTasks}
			<form onSubmit={handleSubmit}>
				<input
					placeholder="What do you need to do?"
					name="task_item"
					onChange={handleFormInput}
					required
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default TaskContainer;
