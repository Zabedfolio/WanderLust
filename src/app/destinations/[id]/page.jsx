import React from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiMapPin, FiCalendar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { EditModalForm } from '@/components/EditModal';
import { DeleteAlertDialog } from '@/components/DeleteAlertDialog';
import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()

    })
    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    const destination = await res.json();

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

    

    return (
        <div className="min-h-screen bg-white">
            {/* Top Nav */}
            <div className="flex items-center justify-between px-4 sm:px-10 pt-4 pb-5">
                <Link
                    href="/destinations"
                    className="flex items-center gap-2 bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                    <FiArrowLeft />
                    <span className="hidden sm:inline">Back to Destinations</span>
                </Link>
                <div className="flex items-center gap-2">
                    <EditModalForm destination={destination} />
                    <DeleteAlertDialog destination={destination} />
                    
                </div>
            </div>

            {/* Hero Image */}
            <div className="max-w-6xl mx-auto h-[220px] sm:h-[320px] lg:h-[420px] overflow-hidden px-4 sm:px-0">
                <img
                    src={imageUrl}
                    alt={destinationName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Body */}
            <div className="max-w-6xl mx-auto px-4 sm:px-10 py-8 flex flex-col lg:flex-row gap-8 lg:gap-10">

                {/* Left Content */}
                <div className="flex-1">
                    {/* Country */}
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-2">
                        <FiMapPin className="text-sm" />
                        <span>{country}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                        {destinationName}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
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
                        <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">Overview</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                    </div>

                    {/* Highlights */}
                    {highlights?.length > 0 && (
                        <div>
                            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">Highlights</h2>
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
                <BookingCard destination={destination}></BookingCard>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;