export default function Backdrop() {
	return (
		<div id="backdrop-container" className="bg-slate-100">
			<div
				data-backdrop-overlay
				className="bg-gradient-to-b from-teal-950/50 to-teal-950/95"
			></div>
			<div data-backdrop-content className="overflow-hidden">
				<img
					src="./images/background-chuck.png"
					alt=""
					className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-full max-h-full"
				/>
			</div>
		</div>
	);
}
