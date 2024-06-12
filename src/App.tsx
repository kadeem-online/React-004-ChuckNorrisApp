import Backdrop from "./components/backdrop";
import HomePage from "./pages/home/index";

export default function App() {
	return (
		<div
			id="app-container"
			className="w-full min-h-screen relative font-primary flex flex-col
			justify-center items-center"
		>
			<Backdrop />
			<HomePage />
		</div>
	);
}
