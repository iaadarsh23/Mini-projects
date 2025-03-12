import React from "react";

const Card = ({ name, image, price, info }) => {
	return (
		<div className="w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform hover:scale-105">
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
				<p className="text-gray-600 text-base">{info}</p>
			</div>
		</div>
	);
};

export default Card;
