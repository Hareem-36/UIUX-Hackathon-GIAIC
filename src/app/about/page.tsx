

"use client";
import React from "react";
import Image from "next/image";
import img1 from "../components/images/contact1.jpg"
import img3 from "../components/images/2h.jpg"

import img4 from "../components/images/0h (2).jpg"
import img5 from "../components/images/6.jpg"
import img6 from "../components/images/5.jpg"
import img7 from "../components/images/4.jpg"
import img8 from "../components/images/girl (1).jpg"
import img9 from "../components/images/ye.jpg"

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-blue-500">ABOUT US</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover a world of quality products tailored for your everyday
            needs. From fashion to electronics, we bring you the best at
            unbeatable prices. Experience seamless shopping with fast delivery
            and excellent customer service.
          </p>
          <button className="bg-blue-500 text-white py-3 px-8 text-lg rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0">
          <Image
            src={img1}
            alt="About Us"
            className="w-full h-auto"
            height={500}
            width={500}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="mb-8">
          <Image
            src={img3}
            alt="Additional Image 1"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={500}
            width={500}
          />
        </div>
       
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">
          Watch Our Story
        </h3>
        
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src={img5}
            alt="Product 1"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src={img6}
            alt="Product 2"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src={img7}
            alt="Product 3"
            className="w-full h-auto rounded-lg shadow-md"
            height={300}
            width={300}
          />
        </div>
      </div>

      {/* Icon Section */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
        <div>
          
          <p className="mt-2 text-sm text-gray-600">Free Shipping</p>
        </div>
        <div>
          
          <p className="mt-2 text-sm text-gray-600">24/7 Support</p>
        </div>
        <div>
          
          <p className="mt-2 text-sm text-gray-600">Secure Payments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="mb-8">
          <Image
            src={img9}
            alt="Bottom Image 1"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={300}
            width={300}
          />
        </div>
        <div>
          <Image
            src={img8}
            alt="Bottom Image 2"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-md mx-auto"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}