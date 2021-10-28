import { NavLink } from 'react-router-dom';

const linkStyles = {
	display: 'inline-block',
	width: '50px',
	padding: '12px',
	margin: '0 6px 6px',
	background: '#8ecae6',
	textDecoration: 'none',
	color: 'black',
};

const NavBar = () => {
	return (
		<div>
			<NavLink
				to="/"
				exact
				style={linkStyles}
				activeStyle={{
					background: '#219ebc',
					color: 'white',
				}}
			>
				App
			</NavLink>
			<NavLink
				to="/home"
				exact
				style={linkStyles}
				activeStyle={{
					background: '#219ebc',
					color: 'white',
				}}
			>
				Home
			</NavLink>
			<NavLink
				to="/tasks"
				exact
				style={linkStyles}
				activeStyle={{
					background: '#219ebc',
					color: 'white',
				}}
			>
				Tasks
			</NavLink>
		</div>
	);
};

export default NavBar;
