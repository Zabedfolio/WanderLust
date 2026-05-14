import React from 'react';
import { FiMapPin, FiCalendar, FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, price, duration, imageUrl, category } = destination;

    return (
        <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            <div className="relative overflow-hidden h-56">
                <img
                    src={imageUrl}
                    alt={destinationName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                    4.5 <FaStar className="text-yellow-400 text-xs" />
                </div>
                {/* Category Badge */}
                {category && (
                    <div className="absolute top-3 left-3 bg-cyan-500 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                        {category}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Country */}
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-1.5">
                    <FiMapPin className="text-xs" />
                    <span>{country}</span>
                </div>

                {/* Name & Price */}
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-gray-900 font-semibold text-lg leading-tight">{destinationName}</h3>
                    <div className="text-right shrink-0">
                        <span className="text-gray-900 font-bold text-lg">${Number(price).toLocaleString()}</span>
                        <span className="text-gray-400 text-xs">/Person</span>
                    </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-cyan-600 text-xs mb-4">
                    <FiCalendar className="text-xs" />
                    <span>{duration}</span>
                </div>

                {/* Book Now */}
                <Link href={`/destinations/${_id}`}>
                    <button className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 font-semibold text-sm transition-colors group/btn">
                    BOOK NOW
                    <FiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>                
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;