"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log("Saved cart from localStorage:", savedCart); // Debugging
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart)); // Ensure this is parsed correctly
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cartItems.some((item: Product) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      console.log("Product already in cart");
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Calculate total price with proper type handling for price
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + Number(item.price), 0) // Convert price to number
      .toFixed(2); // Ensure the total is rounded to two decimal places
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([])); // Clear the cart in localStorage
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 pt-[70px]">
        <h1 className="text-4xl text-center font-bold mb-8 text-[#3563E9]">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            <p>Your cart is empty.</p>
            <Link
              href="/"
              className="mt-4 inline-block py-2 px-6 bg-[#3563E9] text-white rounded-lg hover:bg-blue-500 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-[#1d3557]">{product.title}</h3>
                    <p className="text-gray-600 text-sm">${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="py-2 px-4 bg-[#e63946] text-white rounded-lg hover:bg-[#d03434] transition-all duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Total: ${getTotalPrice()}
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <Link
                href="/"
                className="py-2 px-6 bg-[#3563E9] text-white rounded-lg hover:bg-blue-500 transition-all"
              >
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="py-2 px-6 bg-[#e63946] text-white rounded-lg hover:bg-[#d03434] transition-all"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
