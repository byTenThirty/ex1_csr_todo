import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState(null);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(response => {
				setTodo(response.data);
			});
	}, [id]);

	return (
		<>
			{todo && (
				<div>
					<div className="list-title">
						<h3>클라이언트사이드 리스트</h3>
					</div>
					<div className="detail-content">
						<h2>{`${todo.id}. ${todo.title}`}</h2>
						<p>User id : {todo.userId}</p>
						<p>Completed : {todo.completed.toString()}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Detail;
