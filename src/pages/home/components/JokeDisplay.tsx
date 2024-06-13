import { UseQueryResult } from "@tanstack/react-query";
import JokeContent from "./JokeContent";
import JokeLoading from "./JokeLoading";
import JokeError from "./JokeError";
import useOnlineStatus from "../../../utils/hooks/useOnlineStatus";

interface ChuckApiResponse {
	categories?: Array<string>;
	created_at?: string;
	icon_url?: string;
	id?: string;
	updated_at?: string;
	url?: string;
	value?: string;
}

interface props {
	query?: UseQueryResult<ChuckApiResponse, Error>;
}

export default function JokeDisplay({ query }: props) {
	const isOnline = useOnlineStatus();

	const content =
		isOnline == false ? (
			<JokeError isOffline={true} />
		) : query?.isFetching ? (
			<JokeLoading />
		) : query?.isError ? (
			<JokeError />
		) : (
			<JokeContent text={query?.data?.value} />
		);

	return (
		<div
			id="joke-display"
			className="max-w-lg min-w-40 p-4 bg-slate-200/85 rounded-xl border-2 
      border-slate-400 text-center"
		>
			{content}
		</div>
	);
}
