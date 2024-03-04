import React from "react";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between drop-shadow-lg bg-blue-600 px-7 py-5   transition">
			<div className="text-white">
				<Link href={"/"}>LOGO</Link>
			</div>
			<ul className="flex text-white font-bold  space-x-3 text-lg">
				<li className="hover:bg-slate-300">
					<Link href={`/todos`}>TODOS</Link>
				</li>
				<li className="hover:bg-slate-300">
					<Link href={"/todos"}>About</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
