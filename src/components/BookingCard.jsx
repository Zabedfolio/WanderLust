'use client'

import DepartureDate from '@/components/DepartureDate';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';



const BookingCard = ({destination}) => {

    const { price } = destination;
    return (
        <div className="w-full lg:w-80 shrink-0">
                    <div className="border border-gray-200 rounded-xl p-5 sm:p-6 lg:sticky lg:top-6">
                        <p className="text-gray-400 text-sm mb-1">Starting from</p>
                        <p className="text-cyan-500 text-3xl sm:text-4xl font-bold mb-1">
                            ${Number(price).toLocaleString()}
                            
                        </p>
                        <p className="text-gray-400 text-sm mb-6">per person</p>

                        {/* Date */}
                        <div className="border border-gray-200 rounded-2xl bg-slate-50 px-4 py-4 text-sm text-gray-600 mb-4">
                            <DepartureDate />
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
    );
};

export default BookingCard;