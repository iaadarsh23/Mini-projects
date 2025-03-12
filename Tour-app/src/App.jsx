import { useState } from "react";
import Card from "./components/card";
import { tours } from "./data";

function App() {
	const [city, setCity] = useState(tours);

	function deleteHandler(id) {
		const newTour = city.filter((city) => city.id !== id);
		setCity(newTour);
	}
	if (city.length == 0) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">No tour left</h1>
				<button
					onClick={() => setCity(tours)}
					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
				>
					Refresh
				</button>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8 ">
			<h1 className="text-center mb-6 text-5xl font-bold">Tour with Adarsh</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{city.map((data) => (
					<Card key={data.id} {...data} delTour={deleteHandler} />
				))}
			</div>
		</div>
	);
}

export default App;
