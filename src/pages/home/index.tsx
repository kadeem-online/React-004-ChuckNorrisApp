interface HomePageParameters {
	className?: string;
}

export default function HomePage({ className }: HomePageParameters) {
	return (
		<main className={className || ``}>
			<section id="display-section" className="py-10">
				<div className="container mx-auto flex flex-col gap-5 items-center">
					<h1 className="font-semibold text-slate-100 text-5xl">
						Chuck Norris Jokes
					</h1>

					{/* joke display */}
					<div
						id="joke-display"
						className="max-w-lg p-4 bg-slate-200/85 rounded-xl border-2 border-slate-400"
					>
						<p className="text-slate-900 text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur iste veritatis nobis repellendus earum dicta suscipit
							laborum mollitia?
						</p>
					</div>

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
