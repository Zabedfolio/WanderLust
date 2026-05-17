"use client";

import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { LiaSaveSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";

const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"];

export function EditModalForm({ destination }) {

    const {
        _id,
        destinationName,
        country,
        price,
        duration,
        imageUrl,
        description,
        departureDate,
        category,
        highlights,
    } = destination;

    const [isOpen, setIsOpen] = useState(false);
    const [highlightsList, setHighlightsList] = useState(highlights?.length > 0 ? highlights : [""]);

    const addHighlight = () => setHighlightsList((prev) => [...prev, ""]);

    const removeHighlight = (index) =>
        setHighlightsList((prev) => prev.filter((_, i) => i !== index));

    const updateHighlight = (index, value) =>
        setHighlightsList((prev) => prev.map((h, i) => (i === index ? value : h)));

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());
        updatedDestination.highlights = highlightsList.filter((h) => h.trim() !== "");
        console.log(updatedDestination);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedDestination),
        });
        const data = await res.json();
        console.log(data);

        setIsOpen(false);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 
               px-3 py-2 sm:px-4 sm:py-3 
               w-9 h-9 sm:w-auto sm:h-auto 
               rounded text-sm transition-colors"
            >
                <FiEdit2 className="text-base shrink-0" />
                <span className="hidden sm:inline">Edit</span>
            </button>
            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-medium text-gray-800">Edit Travel Package</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <form onSubmit={onSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    {/* Destination Name */}
                                    <div className="col-span-1 sm:col-span-2 flex flex-col gap-1">
                                        <label className="text-sm text-gray-700">Destination Name</label>
                                        <input
                                            name="destinationName"
                                            required
                                            defaultValue={destinationName}
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
                                            defaultValue={country}
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
                                            defaultValue={category || ""}
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
                                            defaultValue={price}
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
                                            defaultValue={duration}
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
                                            defaultValue={departureDate}
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
                                            defaultValue={imageUrl}
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
                                            defaultValue={description}
                                            placeholder="Describe the travel experience..."
                                            className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400 min-h-[120px] resize-y"
                                        />
                                    </div>

                                    {/* Highlights */}
                                    <div className="col-span-1 sm:col-span-2 flex flex-col gap-2">
                                        <label className="text-sm text-gray-700">Highlights</label>
                                        {highlightsList.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    value={highlight}
                                                    onChange={(e) => updateHighlight(index, e.target.value)}
                                                    placeholder="e.g., Luxury beachfront accommodation"
                                                    className="w-full border border-gray-200 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 text-gray-800 placeholder-gray-400"
                                                />
                                                {highlightsList.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeHighlight(index)}
                                                        className="text-red-400 hover:text-red-600 text-lg leading-none flex-shrink-0"
                                                    >
                                                        ×
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={addHighlight}
                                            className="self-start text-sm text-cyan-500 hover:text-cyan-600 transition-colors"
                                        >
                                            + Add highlight
                                        </button>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
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
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}