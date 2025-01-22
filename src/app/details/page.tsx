"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
  }, []);

  const addToCart = (product: any) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cartItems.some((item: any) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart); // Update the cart state
      alert(`${product.name} has been added to the cart!`); // Alert on successful addition
    } else {
      alert(`${product.name} is already in the cart.`); // Alert if product is already in cart
    }
  };

  return (
    <>
      <div className="bg-[#F6F7F9] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4 min-h-screen">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-2">Type</h2>
              <ul className="text-black">
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                  (type, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      {type}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2 text-black">Capacity</h2>
              <ul className="text-black">
                {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                  (capacity, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      {capacity}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2 text-black">Price</h2>
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                defaultValue="50"
              />
              <div className="text-right text-black">Max. $100.00</div>
            </div>
          </aside>

          {/* Main Content (Right Side) */}
          <div>
            <div className="container mx-auto p-4">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8">
                <div className="bg-white py-6 px-4 w-full max-w-lg shadow-md rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="/mark-1.png" width={24} height={24} alt="mark" />
                    <p className="text-black font-bold">Pick-up</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <select className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto">
                      <option value="">Select city ↓</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                    <input
                      type="date"
                      className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
                    />
                    <input
                      type="time"
                      className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
                    />
                  </div>
                </div>
                <div className="bg-white py-6 px-4 w-full max-w-lg shadow-md rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="/mark-1.png" width={24} height={24} alt="mark" />
                    <p className="text-black font-bold">Drop-off</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <select className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto">
                      <option value="">Select city ↓</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                    <input
                      type="date"
                      className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
                    />
                    <input
                      type="time"
                      className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar and Grid */}
              <div className="flex flex-col lg:flex-row gap-6">
                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {[...Array(8)].map((_, index) => {
                    const product = {
                      id: index + 1,
                      name: `Car Model ${index + 1}`,
                      price: 96.0,
                      image: `/car-${index + 1}.png`,
                    };

                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                      >
                        <p className="text-black font-bold">{product.name}</p>
                        <p className="text-[#90A3BF] mb-4">Sports</p>
                        <Image
                          src={product.image}
                          width={232}
                          height={72}
                          alt="Car"
                          loading="lazy"
                        />
                        <p className="font-bold mt-4 text-black">${product.price}/</p>
                        <p className="text-[#90A3BF]">Day</p>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-[#3563E9] text-white py-2 px-4 mt-4 rounded-lg"
                        >
                          Rent Now
                        </button>
                      </div>
                    );
                  })}
                </main>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Page;
