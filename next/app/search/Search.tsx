"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch("");
		router.push(`/search/${search}`);
	};

	return (
		// <form onSubmit={(e) => handleSearch}> //SALAH : JANGAN pakai e => lagi karena sudah dihandle FormEvent
		<form onSubmit={handleSearch}>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Masukkan lemma pencarian"
			/>
			<button
				type="submit"
				className="border bg-blue-300 hover:bg-slate-400 p-2 px-4"
			>
				submit
			</button>
		</form>
	);
};

export default Search;
