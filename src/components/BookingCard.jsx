'use client'

import DepartureDate from '@/components/DepartureDate';
import React, { useState } from 'react';
import { CalendarDate } from '@internationalized/date';
import { BsCheckCircle } from 'react-icons/bs';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';



const BookingCard = ({ destination }) => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // console.log(user);

  const handleBooking = async () => {
    const formattedDepartureDate = departureDate
      ? `${departureDate.year.toString().padStart(4, '0')}-${departureDate.month.toString().padStart(2, '0')}-${departureDate.day.toString().padStart(2, '0')}`
      : null;

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      country: destination.country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers:{
            "content-type": 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    toast.success(`You booked ${destination.destinationName},${destination.country} successfully!`)
    // console.log(data);
  };


  const { price, departureDate: initialDepartureDate } = destination;
  const [departureDate, setDepartureDate] = useState(
    initialDepartureDate
      ? new CalendarDate(
          ...initialDepartureDate.split("-").map((v) => Number(v))
        )
      : null
  );
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
                    <DepartureDate departureDate={departureDate} setDepartureDate={setDepartureDate} />
                </div>

                {/* Book Button */}
                <button onClick={handleBooking} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors mb-5">
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