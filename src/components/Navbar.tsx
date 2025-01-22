import React from "react";
import Link from "next/link"; // Import the Link component
import { FaHeart, FaShoppingCart, FaUserAlt, FaHome, FaInfoCircle, FaCreditCard, FaCar } from "react-icons/fa"; // Importing icons from react-icons

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-4 px-8 shadow-md w-full">
      {/* Left Section - Logo and Search */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <Link href="/" className="text-[#3563E9] font-bold text-3xl font-poppins">
          MORENT
        </Link>

        {/* Search Box */}
        <div className="relative flex items-center px-4 py-2 border-2 border-[#C3D4E966] rounded-3xl overflow-hidden w-[250px] sm:w-[300px] md:w-[400px] mt-4 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>

          {/* Search Input with Datalist */}
          <Link href="/details">
            <input
              type="text"
              placeholder="Search Something here"
              className="w-full outline-none bg-transparent text-gray-600 text-sm font-poppins"
              list="search-options"
            />
          </Link>

          {/* Datalist with options */}
          <datalist id="search-options">
            <option value="Suvs" />
            <option value="MPV" />
            <option value="Sedan" />
            <option value="Sport" />
            <option value="Hatchback" />
            <option value="Coupe" />
            <option value="Tesla" />
            <option value="Audi" />
            <option value="Civic" />
            <option value="Alto" />
            <option value="Mehran" />
          </datalist>
        </div>
      </div>

      {/* Right Section - Links and Icons */}
      <div className="flex flex-wrap gap-4 mt-4 md:mt-0 ml-auto items-center justify-center md:justify-start w-full md:w-auto">
        {/* Navbar Links with Icons */}
        <Link
          href="/"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaHome size={18} className="mr-2" />
          Home
        </Link>
        <Link
          href="/about"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaInfoCircle size={18} className="mr-2" />
          About
        </Link>

        <Link
          href="/details"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaHeart size={18} className="mr-2" />
          Populars
        </Link>

        <Link
          href="/cart"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaShoppingCart size={18} className="mr-2" />
          Cart
        </Link>

        <Link
          href="/admin"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaUserAlt size={18} className="mr-2" />
          Profile
        </Link>

        {/* Payment Link */}
        <Link
          href="/payment"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaCreditCard size={18} className="mr-2" />
          Payment
        </Link>

        {/* Rent Link */}
        <Link
          href="/Cardetails"
          className="flex items-center text-sm text-gray-500 font-normal my-3 hover:text-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaCar size={18} className="mr-2" />
          Rent
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
