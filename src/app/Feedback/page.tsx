"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import axios from 'axios';  // Add axios to make API requests



// Define types for the form and feedback
interface FeedbackType {
  name: string;
  product: string;
  feedback: string;
}

const Feedback = () => {
  const [form, setForm] = useState<FeedbackType>({ name: "", product: "", feedback: "" }); // Specify type for form
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status
  const [submissionMessage, setSubmissionMessage] = useState(""); // State to show success message

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload

    if (form.name && form.product && form.feedback) {
      try {
        // Send form data to your backend API
        const response = await axios.post('http://localhost:5000/api/send-feedback', form);

        if (response.status === 200) {
          setIsSubmitted(true);
          setSubmissionMessage("Your feedback has been successfully submitted!");
          setForm({ name: "", product: "", feedback: "" });

          setTimeout(() => {
            setIsSubmitted(false);
            setSubmissionMessage("");
          }, 5000);
        }
      } catch (error) {
        setSubmissionMessage("Your Feedback was submitted and we contact you as soon as possible.");
      }
    } else {
      setSubmissionMessage("Please fill out all fields before submitting.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F6F7F9] py-8">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          {/* Feedback Form */}
          <h2 className="text-2xl font-bold text-center text-black mb-6">Customer Feedback</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-lg font-medium text-black">
                Product
              </label>
              <input
                type="text"
                name="product"
                id="product"
                value={form.product}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Product or Marketplace"
                required
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-lg font-medium text-black">
                Feedback
              </label>
              <textarea
                name="feedback"
                id="feedback"
                value={form.feedback}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Share your thoughts"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>

          {/* Success or Error Message */}
          {submissionMessage && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
              <p className="text-lg font-semibold">{submissionMessage}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
