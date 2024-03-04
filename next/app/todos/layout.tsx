import Todolist from "./todolist";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex">
			<div>
				<Todolist />
			</div>
			<div className="flex-1">{children}</div>
		</main>
	);
}
