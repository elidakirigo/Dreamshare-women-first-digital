// Import React for creating components
import React from "react";

// Create a functional component named `Header`
const Header = () => {
  // Return the JSX structure for rendering the header
  return (
    <header className="z-50 absolute w-full" aria-label="Main Navigation">
      <div className="flex w-5/6 lg:w-[70%] justify-between items-center mx-auto mt-5">
        {/* Logo section */}
        <div className="logo hidden sm:block">
          <p className="font-bold text-white uppercase text-base sm:text-xl lg:text-2xl">
            Dreamshare
          </p>
        </div>
        {/* Navigation section */}
        <nav className="flex justify-center sm:justify-end w-full">
          <button className="text-white text-sm lg:text-base hover:bg-blazingRed hover:text-white hover:rounded-full hover:border-2 hover:border-white px-4 py-2 mr-5 rounded-md transition-colors duration-300">
            Login
          </button>
          <button className="bg-transparent text-white text-sm lg:text-base hover:bg-blazingRed px-4 py-2 rounded-full border-2 border-white transition-colors duration-300">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

// Export the `Header` component for use in other parts of the application
export default Header;
