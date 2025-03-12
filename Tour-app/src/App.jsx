import { useState } from "react";
import Card from "./components/card";
import { tours } from "./data";

function App() {
	const [city, setCity] = useState(tours);

	function deleteHandler(id) {
		const newTour = city.filter((city) => city.id !== id);
		setCity(newTour);
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
