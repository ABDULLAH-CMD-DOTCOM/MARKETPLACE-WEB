/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import FAQHelpCenter from '@/components/FAQHelpCenter';

const about = () => {
  return (
    <div>
      <Navbar />
      {/* About Page Content */}
      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 text-center mb-8">
          About Morent Car Company
        </h1>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Welcome to <strong>Morent</strong> – a company built on trust, excellence, and innovation in the automotive world. At <strong>Morent</strong>, we
          believe in transforming the driving experience, making it not only efficient but exciting, stylish, and sustainable.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Since our inception, we have been committed to producing vehicles that set new standards for safety, technology, and comfort. With a passion for
          creating exceptional cars, we have evolved from a small automotive company to a global name, trusted by millions of drivers around the world.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Our mission is simple: to push the boundaries of what is possible in automotive design, engineering, and manufacturing. We are constantly exploring
          new technologies and materials to create vehicles that offer the highest levels of performance and fuel efficiency while maintaining a commitment to
          environmental sustainability.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          At Morent, we understand that a car is more than just a means of transportation. It's an extension of your personality, a symbol of your lifestyle,
          and a tool that helps you navigate the world. This is why we focus on creating vehicles that not only perform exceptionally but also look stunning and
          offer an enjoyable driving experience.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Our commitment to customer satisfaction is at the core of everything we do. From the moment you step into one of our showrooms or visit our website,
          // eslint-disable-next-line react/no-unescaped-entities
          we want you to feel that you're making an informed, confident decision. We take pride in offering personalized service, a wide range of financing
          options, and an unwavering commitment to quality.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          As we continue to innovate and grow, our vision remains steadfast: to create vehicles that are not only technologically advanced but also stylish,
          practical, and eco-friendly. We believe in the future of sustainable transportation, and we are proud to be at the forefront of this movement.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Morent is committed to ensuring that every vehicle that leaves our production line is a testament to our dedication to quality, safety, and
          environmental responsibility. Our team of engineers, designers, and technicians work tirelessly to create vehicles that offer a perfect balance of
          cutting-edge technology and refined craftsmanship.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          As we look to the future, we are excited to continue shaping the automotive industry with our innovative designs, commitment to sustainability, and
          focus on customer satisfaction. We’re not just building cars; we’re building a better future for the generations to come.
        </p>
        <p className="text-lg text-black mb-6 leading-relaxed">
          Thank you for choosing <strong>Morent</strong> as your trusted automotive partner. We are honored to be a part of your journey, and we look forward to
          many more miles of excellence ahead.
        </p>


        <FAQHelpCenter/>
        {/* Credit to Abdullah */}
        <div className="mt-10 text-center text-lg text-gray-700">
          <p>
            Website developed by <span className="font-semibold">Abdullah</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
