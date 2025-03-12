import React, { useState } from "react";

const Card = ({ id, name, image, price, info, delTour }) => {
	const [readMore, setReadMore] = useState(false);
	const description = `${info.substring(0, 100)}...`;

	function handleRead() {
		setReadMore(!readMore);
	}
	function deleteCard() {
		delTour(id);
	}
	return (
		<div className="w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 flex flex-col">
			<div className="relative h-48">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover"
				></img>
			</div>
			<div className="px-6 py-4">
				<div className="flex flex-col  mb-2">
					<p className="text-green-600 font-bold text-xl">${price}</p>
					<h2 className="text-gray-800 font-bold text-xl">{name}</h2>
				</div>
				<div className="flex flex-col gap-3">
					<span
						className="text-gray-600 text-base cursor-pointer"
						onClick={handleRead}
					>
						{description} {readMore ? "show less " : "read more"}
					</span>
					<button className="border-2 text-red-400" onClick={deleteCard}>
						Not interested
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
