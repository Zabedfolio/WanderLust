import { BookingDeleteAlert } from '@/components/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  const {token} = await auth.api.getToken({
          headers: await headers()
  
      });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`,{
    authorization: `bearer ${token}`
  });
  const data = await res.json();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-1">My Bookings</h1>
        <p className="text-gray-500 text-sm mb-8">Manage and view your upcoming travel plans</p>

        {data.length === 0 ? (
          /* ── Empty State ── */
          <div className="flex flex-col items-center justify-center py-24 bg-white shadow-sm">
            {/* Icon */}
            <div className="w-20 h-20 bg-cyan-50 flex items-center justify-center mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="32" height="28" rx="2" stroke="#06b6d4" strokeWidth="2"/>
                <path d="M4 16h32" stroke="#06b6d4" strokeWidth="2"/>
                <path d="M13 4v8M27 4v8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13 24h8M13 29h5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">No bookings yet</h2>
            <p className="text-gray-400 text-sm text-center max-w-xs mb-8">
              Looks like you haven't booked any trips yet. Start exploring destinations and plan your next adventure.
            </p>

            
              <a href="/destinations"
              className="px-8 py-3 bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 transition-colors"
            >
              Explore Destinations
            </a>
          </div>
        ) : (
          /* ── Booking Cards ── */
          <div className="flex flex-col gap-5">
            {data.map((booking) => {
              const date = new Date(booking.departureDate).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric',
              });

              return (
                <div key={booking._id} className="bg-white overflow-hidden flex flex-col sm:flex-row shadow-sm">

                  <img
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    className="w-full sm:w-72 h-60 sm:h-auto object-cover flex-shrink-0"
                  />

                  <div className="flex flex-col justify-between flex-1 px-8 py-6">
                    <div>
                      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{booking.destinationName}</h2>
                      <p className="text-gray-400 text-sm mb-4">{booking.country}</p>

                      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <rect x="1.5" y="3" width="15" height="13" rx="2" stroke="#06b6d4" strokeWidth="1.4"/>
                          <path d="M1.5 7.5h15" stroke="#06b6d4" strokeWidth="1.4"/>
                          <path d="M6 1.5v3M12 1.5v3" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                        Departure: {date}
                      </div>

                      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
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

                    <div className="flex gap-3 mt-6">
                      <BookingDeleteAlert dataId={booking._id} />
                      <button className="px-7 py-2 bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 transition-colors">
                        View
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookingPage;