import React from "react";

const Card = ({ title, date, children, onDelete }) => {
	return (
		<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
			<div className="bg-white shadow-md rounded-lg p-6">
				<div>
					<h1 className="text-xl font-bold mb-2">{title}</h1>
					<p className="text-gray-700 mb-4">{children}</p>
					<p className="text-gray-500 text-sm">{date}</p>
				</div>
				<button
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					onClick={onDelete}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;
