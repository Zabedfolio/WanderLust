import { BookingDeleteAlert } from '@/components/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user.id}`);
  const data = await res.json();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-1">My Bookings</h1>
        <p className="text-gray-500 text-sm mb-8">Manage and view your upcoming travel plans</p>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {data.map((booking) => {
            const date = new Date(booking.departureDate).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            });

            return (
              <div key={booking._id} className="bg-white overflow-hidden flex flex-col sm:flex-row shadow-sm">

                {/* Image — flush, no rounding */}
                <img
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  className="w-full sm:w-72 h-60 sm:h-auto object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 px-8 py-6">

                  {/* Top */}
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{booking.destinationName}</h2>
                    <p className="text-gray-400 text-sm mb-4">{booking.country}</p>

                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                      {/* Calendar icon */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="1.5" y="3" width="15" height="13" rx="2" stroke="#06b6d4" strokeWidth="1.4"/>
                        <path d="M1.5 7.5h15" stroke="#06b6d4" strokeWidth="1.4"/>
                        <path d="M6 1.5v3M12 1.5v3" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      Departure: {date}
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      {/* Receipt icon */}
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="1.5" width="14" height="15" rx="2" stroke="#06b6d4" strokeWidth="1.4"/>
                        <path d="M5.5 6.5h7M5.5 9.5h7M5.5 12.5h4" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                      Booking ID: {booking._id}
                    </div>

                    <p className="text-3xl font-extrabold text-cyan-500 mt-5">
                      ${Number(booking.price).toLocaleString()}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <BookingDeleteAlert></BookingDeleteAlert>
                    <button className="px-7 py-2 bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 transition-colors">
                      View
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default MyBookingPage;