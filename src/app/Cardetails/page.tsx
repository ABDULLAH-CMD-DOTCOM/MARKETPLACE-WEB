import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
<Navbar/>

<div className='flex'>

  {/* Sidebar */}
  <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4 min-h-screen py-3">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-2">Type</h2>
              <ul className='text-black'>
                {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(
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
              <ul className='text-black'>
                {['2 Person', '4 Person', '6 Person', '8 or More'].map(
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
                defaultValue="50" />
              <div className="text-right text-black">Max. $100.00</div>
            </div>
          </aside>

         <div className="w-full lg:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
            <section className="w-full flex flex-col md:flex-row gap-5 items-center justify-around">
              <div className="first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]">
                <div>
                  <Image src={"/View.png"} alt="" width={492} height={360} />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between lg:gap-2">
  <Image 
    src={"/View 1.png"} 
    alt="Thumbnail 1" 
    width={148} 
    height={124} 
    className="w-full sm:w-auto"
  />
  <Image 
    src={"/View 2.png"} 
    alt="Thumbnail 2" 
    width={148} 
    height={124} 
    className="w-full sm:w-auto"
  />
  <Image 
    src={"/View 3.png"} 
    alt="Thumbnail 3" 
    width={148} 
    height={124} 
    className="w-full sm:w-auto"
  />
</div>

              </div>
              <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
                <Image
                  src={"/Detail Car (1).png"}
                  alt="Detail Car"
                  width={492}
                  height={508}
                  className="w-full h-auto rounded-t-xl object-cover"
                />
                <div className="p-4 flex items-center gap-4">
                  <div className="flex items-center justify-between w-full">
                    <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">
                      $80.00 /{" "}
                      <span className="text-gray-500 text-sm lg:text-base">
                        day $100.00
                      </span>
                    </h1>
                  </div>
                  <Link href={"/paymentPage"}>
                    <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white rounded-md w-full max-w-[180px] text-center">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </section>
            <section className="w-full flex items-center justify-center">
              <Image
                src={"/Reviews.png"}
                alt=""
                width={1010}
                height={452}
                className="hidden md:flex"
              />
              <Image
                src={"/Reviews (1).png"}
                alt=""
                width={492}
                height={384}
                className="md:hidden"
              />
            </section>
          </div>
          </div>
          <div className='bg-[#f6f7f9] py-8'>
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row gap-6">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Car Title */}
            <p className="text-black font-semibold text-lg mb-2">New MGZ-6</p>
            
            {/* Car Type */}
            <p className="text-[#90A3BF] mb-4 text-sm">Sports</p>
            
            {/* Car Image */}
            <Image
              src={`/car-${index + 1}.png`}
              width={232}
              height={140}
              alt="Car"
              className="object-contain mb-4"
              loading="lazy"
            />
            
            {/* Car Price */}
            <div className="flex flex-col items-center">
              <p className="font-semibold text-lg text-black">$96.00/</p>
              <p className="text-[#90A3BF] text-sm">Day</p>
            </div>
            
            {/* Rent Now Button */}
            <Link href="/details">
              <button className="bg-[#3563E9] text-white py-3 px-6 mt-6 rounded-lg w-full hover:bg-[#264ac6] transition-all duration-300">
                Rent Now
              </button>
            </Link>
          </div>
        ))}
      </main>
    </div>
  </div>
</div>


          <Footer/>
    </div>
   
  )
}

export default page