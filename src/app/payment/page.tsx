import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9]">
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <section className="lg:col-span-2 space-y-6">
            {/* Billing Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold mb-4 text-black">Billing Info</h2>
              <p className="text-gray-600 mb-4">Please enter your billing info</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Name', 'Phone Number', 'Address', 'Town/City'].map((label, index) => (
                  <div key={index}>
                    <label className="block text-gray-700">{label}</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded mt-1 bg-[#F6F7F9]"
                      placeholder={`Your ${label}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold text-black mb-4">Rental Info</h2>
              <p className="text-gray-600 mb-4">Please select your rental date</p>

              {['Pick-Up', 'Drop-Off'].map((type, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={type === 'Pick-Up' ? '/mark-1.png' : '/mark-2.png'}
                      alt={type}
                      width={20}
                      height={18}
                      className="mr-4"
                    />
                    <h3 className="font-semibold text-black">{type}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Locations', 'Date', 'Time'].map((label, idx) => (
                      <div key={idx}>
                        <label className="block text-gray-700 my-4">{label}</label>
                        <select className="w-full p-2 border text-black border-gray-300 rounded bg-[#F6F7F9]">
                          {label === 'Locations' && [
                            'Karachi', 'Lahore', 'Peshawar', 'Islamabad', 'Multan', 'Pindi', 'Okara', 'Kashmir'
                          ].map((option, i) => <option key={i}>{option}</option>)}
                          {label === 'Date' && [
                            '1 January', '2 January', '3 January', '4 January', '7 January', '12 January', '16 January', '26 January'
                          ].map((option, i) => <option key={i}>{option}</option>)}
                          {label === 'Time' && [
                            '1 AM', '3 AM', '4 AM', '7 AM', '9 AM', '10 AM', '11 AM'
                          ].map((option, i) => <option key={i}>{option}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Method Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold  text-black mb-4">Payment Method</h2>
              <p className="text-gray-600 mb-4">Please enter your payment method</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">
                    <input type="radio" name="payment" className="mr-2" /> Credit Card
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {['Card Number', 'Expiration Date', 'Cardholder', 'CVC'].map((label, index) => (
                      <div key={index}>
                        <label className="block text-gray-700">{label}</label>
                        <input
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded mt-1 bg-[#F6F7F9]"
                          placeholder={label}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {['PayPal', 'Bitcoin'].map((method, index) => (
                  <label key={index} className="block text-gray-700 flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    <Image
                      src={method === 'PayPal' ? 'https://upload.wikimedia.org/wikipedia/commons/5/53/PayPal.svg' : 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg'}
                      alt={`${method} Logo`}
                      width={20}
                      height={20}
                      className="w-6 h-6 mr-2"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-extrabold text-black mb-4">Confirmation</h2>
              <p className="text-gray-600 mb-4">
                We are getting to the end. Just a few clicks and your rental is ready!
              </p>
              <div className="space-y-4">
                {['Marketing and newsletter emails', 'Terms and conditions and privacy policy'].map((text, index) => (
                  <label key={index} className="block text-gray-700">
                    <input type="checkbox" className="mr-2" /> I agree with {text}.
                  </label>
                ))}
              </div>
              <Link href="/admin">
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto mt-8 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Rent Now
                </button>
              </Link>
            </div>
          </section>

          {/* Rental Summary Section */}
          <aside className="bg-white p-6 rounded-lg shadow-md h-[700px]">
            <h2 className="text-xl font-extrabold text-black mb-4">Rental Summary</h2>
            <p className="text-gray-600 mb-4">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
            <div className="flex items-center mb-4">
              <Image
                src="/product.png"
                alt="Product Image"
                width={150}
                height={90}
                className="w-auto h-auto object-cover rounded mr-4"
              />
              <div>
                <h3 className="font-bold text-black">Nissan GTR</h3>
                <p className="text-yellow-500 flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                  <i className="fa fa-star-half-alt"></i>
                  <span className="ml-2">440 Reviews</span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              {['Subtotal', 'Tax'].map((label, index) => (
                <div key={index} className="flex justify-between mb-2">
                  <span className="text-gray-700">{label}</span>
                  <span className="text-gray-700">${label === 'Subtotal' ? '80.00' : '0.00'}</span>
                </div>
              ))}

              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-semibold">Promo Code</span>
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="w-[160px] p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-bold text-2xl">Total</span>
                <span className="text-gray-700 font-bold text-2xl">$80.00</span>
              </div>
              <p className="text-black text-sm mt-2">Overall price includes rental discounts.</p>
            </div>
          </aside>
        </div>

        <div className="flex justify-center items-center my-6">
          <Link href="/Feedback">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Feedback
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
