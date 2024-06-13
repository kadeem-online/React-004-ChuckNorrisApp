import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// components
import JokeDisplay from "./components/JokeDisplay";

interface props {
	className?: string;
}

function fetchJoke() {
	const URL = `https://api.chucknorris.io/jokes/random`;

	return axios.get(URL).then((response) => {
		if (response.status === 200) {
			return response.data;
		}

		throw new Error(`Error ${response.status}.`);
	});
}

export default function HomePage({ className }: props) {
	const jokeQuery = useQuery({
		queryKey: ["chuckNorrisJoke"],
		queryFn: fetchJoke,
	});

	/**
	 * Handles events requesting a new joke.
	 */
	const jokeRefreshHandler = () => {
		jokeQuery.refetch();
	};

	return (
		<main className={className || ``}>
			<section id="display-section" className="py-10">
				<div className="container px-5 mx-auto flex flex-col gap-5 items-center">
					<h1 className="font-semibold text-slate-100 text-3xl lg:text-5xl text-center">
						Chuck Norris Jokes
					</h1>

					{/* joke display */}
					<JokeDisplay query={jokeQuery} />

					{/* Actions */}
					<div id="actions-panel" className="">
						<button
							data-refresh-action
							className="bg-yellow-500 py-1 px-4 text-purple-950 rounded
							hover:bg-yellow-300"
							onClick={jokeRefreshHandler}
						>
							Refresh
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
