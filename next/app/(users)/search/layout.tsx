import Search from "./Search";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex space-x-5 divide-x-2 p-5">
			<div>
				<h1>Search</h1>
			</div>
			<div className="flex-1 pl5">
				<Search />
				{children}
			</div>
		</main>
	);
}
