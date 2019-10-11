import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				setTodos(response.data);
			});
	}, []);

	return (
		<ul>
			{todos.map(todo => <li key={todo.id}><Link to={`/todo/${todo.id}`}>{todo.title}</Link></li>)}
		</ul>
	);
};

export default Home;
