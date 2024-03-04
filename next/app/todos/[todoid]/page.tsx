import { Todo } from "@/typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type Pageprops = {
	params: {
		todoid: string;
	};
};

const fetchTodo = async (todoid: String) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoid}`,
		{ next: { revalidate: 60 } }
	);
	const todo: Todo = await response.json();
	return todo;
};

const userCard = async (todoid: String) => {
	const todo = await fetchTodo(todoid);

	if (!todo.id) return notFound();
	return (
		<div className=" p-10 bg-yellow-300 border-2 m-2 shadow-lg">
			<p>
				#{todo.id} : {/* @ts-ignore */}
				{todo.title}
			</p>
			<p>completed: {todo.completed ? "yes" : "no"}</p>
			<p className="border-t border-black mt-5 text-right">
				by User : {todo.userId}
			</p>
		</div>
	);
};

//MAIN
const Todopage = ({ params: { todoid } }: Pageprops) => {
	return <>{userCard(todoid)}</>;
};

export default Todopage;

export async function generateStaticParams() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const todos: Todo[] = await response.json();

	const trimmedTodos = todos.splice(0, 10);

	return trimmedTodos.map((todo) => ({
		todoid: todo.id.toString(),
	}));
}
