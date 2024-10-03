// Separate reusable SearchIcon component
const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11 2a9 9 0 016.364 15.364l4.664 4.664a1 1 0 01-1.414 1.414l-4.664-4.664A9 9 0 1111 2zm0 2a7 7 0 100 14 7 7 0 000-14z"
      />
    </svg>
  );
  
  // Banner component with correct background image
  export const Banner = () => {
    return (
      <section
        className="bg-cover bg-center h-[400px] mt-0"
        style={{
          backgroundImage: `url('https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg')`,
        }}
      >
        <div className="flex flex-col justify-center h-full py-20  bg-opacity-50">
          <header className="text-center text-white">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold mb-4">
              It's Now Safe To <span className="text-red-500">Crave!</span>
            </h1>
  
            {/* Search Bar */}
            <form
              className="hidden sm:flex flex-col sm:flex-row justify-center items-center w-full max-w-6xl lg:max-w-7xl space-y-3 sm:space-y-0 sm:space-x-3 mt-4 px-3"
              role="search"
            >
              <div className="relative w-full lg:w-2/3">
                {/* Search Icon */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-500">
                  <SearchIcon />
                </span>
  
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Search for Restaurants, Cuisines, Location..."
                  className="pl-10 pr-4 py-2 lg:py-3 lg:text-lg rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
                  maxLength="50"
                  autoComplete="off"
                />
              </div>
  
              {/* Search Button */}
              <button
                className="bg-red-500 text-white w-full sm:w-auto px-6 lg:px-10 py-2 lg:py-3 rounded-lg hover:bg-red-600 transition"
                type="submit"
              >
                Search
              </button>
            </form>
          </header>
        </div>
      </section>
    );
  };
  
  // Usage
  <Banner />
  