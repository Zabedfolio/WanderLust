"use client";
import {
    Button,
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { LiaSaveSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"];

const AddDestinationPage = () => {
    const [formKey, setFormKey] = useState(0);

    const onSubmit = async(e)=>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        console.log(destination);

        const res = await fetch('http://localhost:5000/destination', {
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(destination)
        })
        const data = await res.json();
        console.log(data);

        setFormKey(prev => prev + 1);
    }

    return (
        <div  className="min-h-screen bg-white py-10 px-6 sm:px-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-10">
                Add New Travel Package
            </h1>

            <div className="max-w-2xl border border-gray-200 rounded-lg p-6 sm:p-8">
                <form key={formKey} onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Destination Name */}
                        <div className="col-span-1 sm:col-span-2 flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Destination Name</label>
                            <input
                                name="destinationName"
                                required
                                placeholder="Bali Paradise"
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {/* Country */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Country</label>
                            <input
                                name="country"
                                required
                                placeholder="Indonesia"
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Category</label>
                            <select
                                name="category"
                                required
                                defaultValue=""
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800"
                            >
                                <option value="" disabled>Select category</option>
                                {CATEGORIES.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Price */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Price (USD)</label>
                            <input
                                name="price"
                                type="number"
                                required
                                placeholder="e.g., 1299"
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {/* Duration */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Duration</label>
                            <input
                                name="duration"
                                required
                                placeholder="e.g., 7 Days/6 Nights"
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {/* Departure Date */}
                        <div className="col-span-1 sm:col-span-2 flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Departure Date</label>
                            <input
                                name="departureDate"
                                type="date"
                                required
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="col-span-1 sm:col-span-2 flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Image URL</label>
                            <input
                                name="imageUrl"
                                type="url"
                                required
                                placeholder="https://example.com/image.jpg"
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {/* Description */}
                        <div className="col-span-1 sm:col-span-2 flex flex-col gap-1">
                            <label className="text-sm text-gray-700">Description</label>
                            <textarea
                                name="description"
                                required
                                placeholder="Describe the travel experience..."
                                className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400 min-h-[140px] resize-y"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="button"
                            className="flex items-center gap-2 border border-red-400 text-red-500 hover:bg-red-50 px-5 py-2 rounded text-sm transition-colors"
                        >
                            <RiDeleteBinLine />
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded text-sm font-medium transition-colors"
                        >
                            <LiaSaveSolid className="text-xl" />
                            Add Travel Package
                        </button>
                    </div>
                </form>
            </div>
            </div>
            
        </div>
    );
};

export default AddDestinationPage;