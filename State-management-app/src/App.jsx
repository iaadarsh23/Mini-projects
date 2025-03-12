import { useState } from "react";
import "./App.css";
import NewProduct from "./components/addDetail";
import Card from "./components/card";
import { cardData } from "./data";
import Counter from "./components/counter";

function App() {
	// const [cards, setNewcard] = useState([...cardData]);
	// const handleNewProduct = (data) => {
	// 	setNewcard((prev) => [...prev, data]);
	// };
	return (
		<>
			{/* <NewProduct getData={handleNewProduct} />
			{cards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					children={card.children || card.description}
					date={card.date}
					onDelete= {DeleteCard}
				/>
			))} */}

			<Counter />
		</>
	);
}

export default App;
