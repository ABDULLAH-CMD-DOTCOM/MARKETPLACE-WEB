import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-blue-600 text-2xl font-bold">MORENT</h1>
            <p className="text-gray-600 mt-2">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h2 className="text-gray-800 font-semibold">About</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Featured</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Partnership</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Business Relation</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-800 font-semibold">Community</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Podcast</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Invite a friend</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-800 font-semibold">Socials</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Discord</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-black text-sm mt-16">&copy;2022 MORENT. All rights reserved</p>
          <div className="flex space-x-4 md:mt-0">
            <a href="#" className="text-black font-semibold hover:text-gray-800 mt-16">Privacy & Policy</a>
            <a href="#" className="text-black font-semibold hover:text-gray-800 mt-16">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
