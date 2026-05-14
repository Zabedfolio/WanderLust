"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  if (isPending) return null; // or a skeleton loader

  return (
    <nav className="relative bg-white">
      {/* Main bar */}
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left nav — hidden on mobile */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/my-bookings">My Bookings</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>

        {/* Hamburger — shown on mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Logo — always centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image alt="nav-img" src="/assets/Wanderlast.png" width={162} height={24} />
        </div>

        {/* Right nav — hidden on mobile */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6 items-center">
            {user ? (
              <>
                <li className="flex items-center gap-3">
                  <span className="text-slate-800 font-medium text-sm">
                    Hello,{" "}
                    <span className="text-cyan-600 font-semibold text-lg">
                      {user.name || "Traveler"}
                    </span>
                  </span>
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-pink-100">
                    <img
                      src={user.image || "/assets/User.png"}
                      alt={user.name || "User avatar"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=""
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="flex gap-1 items-center">
                  <Image alt="user" src="/assets/User.png" width={16} height={16} />
                  <Link href="/profile">Profile</Link>
                </li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Placeholder to keep logo centered on mobile */}
        <div className="md:hidden w-8" />
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link>
          <Link href="/my-bookings" onClick={() => setMenuOpen(false)}>My Bookings</Link>
          <Link href="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>
          <hr className="border-gray-100" />
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-200 shrink-0 border-2 border-pink-100">
                  <img
                    src={user.image || "/assets/User.png"}
                    alt={user.name || "User avatar"}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-slate-800 font-medium text-sm">
                  Hello,{" "}
                  <span className="text-cyan-600 font-semibold text-lg">
                    {user.name || "Traveler"}
                  </span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className=""
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/profile" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <Image alt="user" src="/assets/User.png" width={16} height={16} />
                Profile
              </Link>
              <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;