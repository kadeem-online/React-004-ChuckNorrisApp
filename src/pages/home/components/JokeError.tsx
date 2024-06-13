interface props {
	isOffline?: boolean;
}
export default function JokeError({ isOffline }: props) {
	const errorText = isOffline
		? `"Chuck Norris doesn't need the internet to tell jokes.
			But you do, so please check your connection and try again!"`
		: `Error fetching Joke`;
	return <p className="text-red-700">{errorText}</p>;
}
