import JokeDisplay from "./components/JokeDisplay";

interface props {
	className?: string;
}

export default function HomePage({ className }: props) {
	return (
		<main className={className || ``}>
			<section id="display-section" className="py-10">
				<div className="container px-5 mx-auto flex flex-col gap-5 items-center">
					<h1 className="font-semibold text-slate-100 text-3xl lg:text-5xl text-center">
						Chuck Norris Jokes
					</h1>

					{/* joke display */}
					<JokeDisplay />

					{/* Actions */}
					<div id="actions-panel" className="">
						<button
							data-refresh-action
							className="bg-yellow-500 py-1 px-4 text-purple-950 rounded
							hover:bg-yellow-300"
						>
							Refresh
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
