
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react"
import Cart from "./cart/page";
import Feedback from "@/components/Feedback";
import FAQHelpCenter from "@/components/FAQHelpCenter";
import Cards from "@/components/Cards";







export default function Home() {
  return (
    <div >

      <Navbar />
      <Hero />
      <Cards />
      <Footer />



    </div>
  );
}
