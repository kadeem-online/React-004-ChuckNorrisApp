interface props {
	text?: string;
}

export default function JokeContent({ text }: props) {
	return <p className="text-slate-900 text-center">{text}</p>;
}
