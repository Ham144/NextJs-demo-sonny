import { Suspense } from "react";
import Todolist from "./(users)/todos/todolist";
Suspense;

export default function Home() {
	return (
		<>
			<Suspense fallback={<p>Memuat..</p>}>
				<h1>Loading Todos</h1>
				<div className="flex space-x-2">
					<Todolist />
				</div>
			</Suspense>

			<Suspense fallback={<p>Memuat..</p>}>
				<h1>Loading hsopping Trolley</h1>
				<div className="flex space-x-2">
					<Todolist />
				</div>
			</Suspense>
		</>
	);
}
