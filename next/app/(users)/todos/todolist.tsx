import { Todo } from "@/typings";
import Link from "next/link";
import { Console } from "console";
import React from "react";

const Todolist = async () => {
	const response = await fetch("https://dummyjson.com/todos")
		.then((data) => data.json())
		.then((todos) =>
			todos.todos.map((todo: Todo) => {
				//ingat ya kalo dia objek bukan array akses dulu dalemnya, todos.todos
				return todo;
			})
		);

	return (
		<div>
			{response.map((todo: Todo) => (
				<ul key={todo.id}>
					<Link href={`${todo.id}`}>todo : {todo.id}</Link>
				</ul>
			))}
		</div>
	);
};
export default Todolist;
