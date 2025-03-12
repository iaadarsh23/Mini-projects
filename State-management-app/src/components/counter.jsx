import { React, useState } from "react";

const Counter = () => {
	let [num, setNum] = useState(0);

	const handleIncrement = () => {
		setNum((num = num + 1));
	};
	const handleDecrement = () => {
		setNum((num = num - 1));
	};
	const Reset = () => {
		setNum(0);
	};

	return (
		<div className="flex items-center justify-center p-5 border border-gray-300 rounded-lg w-[300px] my-12 mx-auto bg-[#f9f9f9]">
			<button
				className="text-base p-2 mr-4 cursor-pointer"
				onClick={handleIncrement}
			>
				+
			</button>
			<p className="text-xl font-bold mx-4">{num}</p>
			<button
				className="text-base p-2 ml-4 cursor-pointer"
				onClick={handleDecrement}
			>
				-
			</button>
			<button className="text-base p-2 ml-4 cursor-pointer" onClick={Reset}>
				Reset
			</button>
		</div>
	);
};

export default Counter;
