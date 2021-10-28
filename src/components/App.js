import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import TaskList from './TaskList';
import LandingPage from './LandingPage';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route path="/tasks">
					<TaskList />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
