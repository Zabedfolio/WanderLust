import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-6 py-4 bg-white'>
            {/* leftside */}
            <div>
                <ul className='flex gap-8'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinations'}>Destinations</Link></li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                    <li><Link href={'/admin'}>Admin</Link></li>
                </ul>
            </div>

            {/* middle */}
            <div>
                <Image alt="nav-img" src="/assets/Wanderlast.png" width={162} height={24} />
            </div>

            {/* rightside */}
            <div >
                <ul className='flex gap-8'>
                    <li className='flex gap-1 items-center'>
                        <Image alt='user' src="/assets/User.png" width={16} height={16} />
                        <Link href={'/profile'}>Profile</Link>
                    </li>
                    <li><Link href={'/login'}>Login</Link></li>
                    <li><Link href={'/signup'}>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;