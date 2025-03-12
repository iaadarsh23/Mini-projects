import Card from "./components/card";
import { tours } from "./data";

function App() {
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{tours.map((city) => (
					<Card key={city.id} {...city} />
				))}
			</div>
		</div>
	);
}

export default App;
