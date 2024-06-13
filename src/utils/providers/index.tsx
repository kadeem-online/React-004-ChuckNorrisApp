import React from "react";
import ReactQueryProvider from "./QueryProvider";

interface props {
	children?: React.ReactNode;
}

export default function ContextProviderWrapper({ children }: props) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
