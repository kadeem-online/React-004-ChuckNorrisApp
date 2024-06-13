interface props {
	joke?: string;
}

export default function JokeDisplay({ joke }: props) {
	return (
		<div
			id="joke-display"
			className="max-w-lg min-w-40 p-4 bg-slate-200/85 rounded-xl border-2 
      border-slate-400"
		>
			<p className="text-slate-900 text-center">
				{joke || `Chuck Norris Joke Goes Here.`}
			</p>
		</div>
	);
}
