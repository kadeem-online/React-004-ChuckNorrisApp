import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface props {
	children?: React.ReactNode;
}

export default function ReactQueryProvider({ children }: props) {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
