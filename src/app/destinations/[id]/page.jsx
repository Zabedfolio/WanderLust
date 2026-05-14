import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiEdit2, FiTrash2, FiMapPin, FiCalendar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { EditModalForm } from '@/components/EditModal';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const {
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

    return (
        <div className="min-h-screen bg-white">
            {/* Top Nav */}
            <div className="flex items-center justify-between px-6 sm:px-10 pt-4 pb-7">
                <Link
                    href="/destinations"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm transition-colors"
                >
                    <FiArrowLeft />
                    Back to Destinations
                </Link>
                <div className="flex items-center gap-3">
                    <EditModalForm></EditModalForm>
                    <button className="flex items-center gap-2 border border-red-300 text-red-500 hover:bg-red-50 px-4 py-2 rounded text-sm transition-colors">
                        <FiTrash2 className="text-sm" />
                        Cancel
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-6xl mx-auto h-[420px] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={destinationName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Body */}
            <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-col lg:flex-row gap-10">

                {/* Left Content */}
                <div className="flex-1">
                    {/* Country */}
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
                        <FiMapPin className="text-sm" />
                        <span>{country}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                        {destinationName}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-5 text-sm text-gray-500 mb-8">
                        <div className="flex items-center gap-1.5">
                            <FaStar className="text-yellow-400" />
                            <span className="font-semibold text-gray-800">4.9</span>
                            <span className="text-gray-400">(234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FiCalendar className="text-gray-400" />
                            <span className="font-medium text-gray-700">{duration}</span>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-light text-gray-900 mb-3">Overview</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                    </div>

                    {/* Highlights */}
                    {highlights?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-light text-gray-900 mb-3">Highlights</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <BsCheckCircle className="text-cyan-500 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right — Booking Card */}
                <div className="w-full lg:w-80 shrink-0">
                    <div className="border border-gray-200 rounded-xl p-6 sticky top-6">
                        <p className="text-gray-400 text-sm mb-1">Starting from</p>
                        <p className="text-cyan-500 text-4xl font-bold mb-1">
                            ${Number(price).toLocaleString()}
                        </p>
                        <p className="text-gray-400 text-sm mb-6">per person</p>

                        {/* Date */}
                        <div className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-600 mb-4">
                            {departureDate}
                        </div>

                        {/* Book Button */}
                        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors mb-5">
                            Book Now →
                        </button>

                        {/* Perks */}
                        <div className="space-y-2.5">
                            {[
                                'Free cancellation up to 7 days',
                                'Travel insurance included',
                                '24/7 customer support',
                            ].map((perk, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                    <BsCheckCircle className="text-cyan-500 shrink-0" />
                                    {perk}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;