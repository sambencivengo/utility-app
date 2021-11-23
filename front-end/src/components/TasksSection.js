import React, { useState, useEffect } from 'react';

import TaskList from './TaskList';

const TasksSection = () => {
	const url = 'http://localhost:3000/task';
	const [tasks, setTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const [task, setTask] = useState({});
	const handleFormInput = (e) => {
		console.log(`Key = ${e.target.name} : Value = ${e.target.value}`);
		setTask({ [e.target.name]: e.target.value });
	};

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
				setTasks([...tasks, newTask]);
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
				const incomplete = data.filter(
					(task) => task.completed_status === false
				);
				console.log('From useEffect: ', data);

				const complete = data.filter(
					(task) => task.completed_status === true
				);
				setTasks(incomplete);
				setCompletedTasks(complete);
			});
	}, []);

	console.log(tasks);
	console.log(completedTasks);

	// COMPLETE TASK

	const handleComplete = (completedTask) => {
		// use this
		console.log(completedTask);
		setCompletedTasks([...completedTasks, completedTask]);
	};

	// DELETE TASK
	const handleDelete = (doomedTask) => {
		fetch(url + '/' + doomedTask.id, {
			method: 'DELETE',
		}).then(() => {
			const filteredTasks = tasks.filter(
				(task) => task.id !== doomedTask.id
			);
			setTasks(filteredTasks);
		});
		console.log(doomedTask);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="What do you need to do?"
					name="task_item"
					onChange={handleFormInput}
					required
				></input>
				<button>Submit</button>
			</form>

			<div className="task-lists">
				<TaskList tasks={tasks} />
				<TaskList tasks={completedTasks} />
			</div>
		</div>
	);
};

export default TasksSection;
