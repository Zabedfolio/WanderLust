const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-12 md:py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid — 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-gray-300 placeholder-gray-500"
              />
              <span className="text-white text-lg">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Destinations</li>
              <li className="hover:text-white cursor-pointer">My Bookings</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm">CONTACT US</h3>
            <ul className="space-y-2 text-sm">
              <li>786 901 1622</li>
              <li>info@wandarland.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 Wanderlust. All rights reserved.</p>
          <div className="flex gap-5 text-white text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;