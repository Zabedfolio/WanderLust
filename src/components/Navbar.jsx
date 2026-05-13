import Image from 'next/image';
import React from 'react';
import NavLogo from '../../public/assets/Wanderlast.png';
import Link from 'next/link';
import User from '../../public/assets/User.png'
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            {/* leftside */}
            <div>
                <ul>
                    <li><Link href={''}>Home</Link></li>
                    <li><Link href={''}>Destinations</Link></li>
                    <li><Link href={''}>My Bookings</Link></li>
                    <li><Link href={''}>Admin</Link></li>
                </ul>
            </div>

            {/* middle */}
            <div>
                <Image alt="nav-img" src={NavLogo}></Image>
            </div>

            {/* rightside */}
            <div>
                <ul className='flex'>
                    <div className='flex'>
                        <Image alt='user' src={User} width={16} height={16}></Image>
                    <li><Link href={''}>Profile</Link></li>
                    </div>
                    <li><Link href={''}>Login</Link></li>
                    <li><Link href={''}>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;