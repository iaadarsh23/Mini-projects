import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Card from "./card";
const NewProduct = (props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const dataStore = {
			data,
		};
		props.getData(data);
		reset(); // Reset form after submission
		console.log(dataStore);
	};

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6">Add New Card</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label className="block text-gray-700 mb-2">Title</label>
					<input
						type="text"
						{...register("title", { required: "Title is required" })}
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					{errors.title && (
						<p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
					)}
				</div>

				<div>
					<label className="block text-gray-700 mb-2">Description</label>
					<textarea
						{...register("description", {
							required: "Description is required",
						})}
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						rows="4"
					/>
					{errors.description && (
						<p className="text-red-500 text-sm mt-1">
							{errors.description.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-gray-700 mb-2">Date</label>
					<input
						type="date"
						{...register("date", { required: "Date is required" })}
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					{errors.date && (
						<p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
				>
					Add Card
				</button>
			</form>
		</div>
	);
};

export default NewProduct;
