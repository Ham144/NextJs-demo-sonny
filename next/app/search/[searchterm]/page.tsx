import React from "react";

type Pageprops = {
	params: {
		searchterm: string;
	};
};

type TypingSearchResult = {
	organic_results: [
		{
			position: number;
			title: string;
			link: string;
			favicon: string;
			snippet: string;
		}
	];
};

const search = async (searchterm: String) => {
	const response = await fetch(
		`https://serpapi.com/search.json?q=${searchterm}&api_key=${process.env.API_KEY}` //ga ada yg salah disini
	);
	const data: TypingSearchResult = await response.json();
	return data;
};

const SearchResult = async ({ params: { searchterm } }: Pageprops) => {
	const searchResults = await search(searchterm);

	return (
		<div>
			<p className="text-gray-500 text-sm">hasil pencarian {searchterm}</p>
			<ol className="space-y-5 p-5">
				{searchResults.organic_results.map((result) => (
					<li key={result.position} className="list-decimal">
						<p className="font-bold">{result.title}</p>
						<p>{result.snippet}</p>
					</li>
				))}
			</ol>
		</div>
	);
};

export default SearchResult;
