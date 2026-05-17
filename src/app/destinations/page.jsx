import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import DestinationCard from '@/components/DestinationCard';
export const dynamic = 'force-dynamic';

const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"];
const PRICE_RANGES = ["Under $500", "$500 - $1000", "$1000 - $2000", "$2000+"];
const SORT_OPTIONS = ["Price: Low to High", "Price: High to Low", "Rating", "Duration"];

const FilterDropdown = ({ label, options }) => (
    <div className="relative">
        <select
            defaultValue=""
            className="w-full appearance-none border border-gray-200 bg-white rounded-none px-5 py-4 text-sm font-medium tracking-widest text-gray-500 uppercase focus:outline-none focus:border-cyan-400 cursor-pointer pr-10"
        >
            <option value="" disabled>{label}</option>
            {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
);

const DestinationPage = async () => {
    let destinations = [];
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
        if (res.ok) destinations = await res.json();
    } catch (err) {
        console.error('Failed to fetch destinations:', err);
    }

    return (
        <div className="min-h-screen bg-white px-6 sm:px-10 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-2">
                        Explore All Destinations
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Find your perfect travel experience from our curated collection
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-200 mb-6">
                    <div className="border-b sm:border-b-0 sm:border-r border-gray-200">
                        <FilterDropdown label="Category" options={CATEGORIES} />
                    </div>
                    <div className="border-b sm:border-b-0 sm:border-r border-gray-200">
                        <FilterDropdown label="Price Range" options={PRICE_RANGES} />
                    </div>
                    <div>
                        <FilterDropdown label="Sort By" options={SORT_OPTIONS} />
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                    Showing {destinations.length} destination{destinations.length !== 1 ? 's' : ''}
                </p>
                {destinations.length === 0 ? (
                    <div className="text-center py-24 text-gray-400">
                        <p className="text-lg">No destinations found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {destinations.map((destination) => (
                            <DestinationCard key={destination._id} destination={destination} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationPage;