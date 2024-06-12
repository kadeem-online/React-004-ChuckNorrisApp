interface HomePageParameters {
	className?: string;
}

export default function HomePage({ className }: HomePageParameters) {
	return (
		<main className={className || ``}>
			<section id="display-section" className="py-10">
				<div className="container mx-auto">
					<h1 className="font-semibold text-slate-800 text-5xl">
						Chuck Norris Jokes
					</h1>
				</div>
			</section>
		</main>
	);
}
