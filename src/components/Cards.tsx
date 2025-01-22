"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaGasPump, FaCogs, FaHeart, FaRegHeart } from "react-icons/fa";
import { Car } from "../../types/car";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { four } from "@/sanity/lib/queries";

const Cards = () => {
  const [products, setProducts] = useState<Car[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Car[] = await client.fetch(four);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();

    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add or remove product from wishlist
  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id)); // Remove
    } else {
      setWishlist([...wishlist, id]); // Add
    }
  };

  return (
    <>
      <div className="grid gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#F6F7F9]">
        {products.map((product) => {
          const imageUrl = product.image?.asset ? urlFor(product.image).url() : "/fallback-image.jpg";
          const isInWishlist = wishlist.includes(product._id);

          return (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Wishlist Icon */}
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => toggleWishlist(product._id)}
              >
                {isInWishlist ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-xl" />
                )}
              </div>

              {/* Product Details */}
              <Link href={product.slug?.current ? `/product/${product.slug.current}` : "#"}>
                <h3 className="text-xl font-extrabold text-gray-800 my-2 mx-11">
                  {product.name || "Unknown Car"}
                </h3>
                <p className="text-gray-600 mx-11">Sports</p>

                {/* Car Image */}
                {imageUrl && (
                  <div className="relative w-full h-40 sm:h-48 md:h-56">
                    <Image
                      src={imageUrl}
                      alt={product.name || "Car image"}
                      width={500}
                      height={300}
                      className="object-contain p-4"
                    />
                  </div>
                )}

                {/* Features */}
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{product.description}</p>

                  <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                    <div className="flex items-center space-x-1">
                      <HiOutlineUserGroup className="text-blue-500" />
                      <p>{product.seatingCapacity}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaGasPump className="text-blue-500" />
                      <p>{product.fuelCapacity}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCogs className="text-blue-500" />
                      <p>Manual</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-lg font-bold text-black">{product.pricePerDay}</p>
                    <Link
                      href="/Cardetails"
                      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-md"
                    >
                      Rent Now
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-black text-sm mt-2">
                    <p className="text-black line-through">{product.originalPrice}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center my-6">
        <Link href="/details">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Show More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cards;
