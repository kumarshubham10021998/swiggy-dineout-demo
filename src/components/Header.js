export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png"
              alt="Swiggy Dineout"
              title="Swiggy Dineout"
              width="125"
              height="34"
              className="object-contain"
            />
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 border p-2 pr-20 rounded">
            <span className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 13">
                <path
                  fill="#666"
                  fillRule="nonzero"
                  d="M5 0a5 5 0 0 1 5 5c0 1.826-.84 3.618-2.213 5.246C6.776 11.446 5.501 12.5 5 12.5c-.501 0-1.776-1.053-2.787-2.254C.84 8.618 0 6.826 0 5a5 5 0 0 1 5-5zm0 1.25A3.75 3.75 0 0 0 1.25 5c0 1.484.72 3.017 1.919 4.441.452.537.948 1.024 1.409 1.405.185.154.422.325.422.325s.263-.193.422-.325c.461-.38.957-.868 1.41-1.405C8.03 8.017 8.75 6.484 8.75 5A3.75 3.75 0 0 0 5 1.25zm0 1.875a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75zm0 1.25a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25z"
                />
              </svg>
            </span>
            <span className="text-gray-800">Delhi</span>
            <i className="text-gray-400"></i>
          </div>



          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-800 hover:text-red-500" style={{ color: '#666666' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-800 hover:text-red-500" style={{ color: '#666666' }}>
                  Book a Table
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener" className="text-gray-800 hover:text-red-500 mx-2" style={{ color: '#666666' }}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Login Button */}
          <div className="hidden sm:block">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Login</button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden w-full mt-2 px-4">
          <input
            type="text"
            className="border rounded-lg px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search for Restaurants, Cuisines, Location..."
          />
          <button className="w-full bg-red-500 text-white mt-2 py-2 rounded-lg">Search</button>
        </div>
      </header>

    </div>
  );
}
