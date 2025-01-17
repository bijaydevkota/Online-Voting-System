import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <nav className="flex justify-between p-2 bg-blue-400 text-white items-center sticky top-0 b z-50">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/blog" className="hover:text-gray-300">Blogs</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
       
        <div>
        <Link href="/votenow" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-2 rounded-xl text-xl">Vote Now</Link>
        </div>
        </div>
      </nav>

      <section id="about" className="bg-gray-100 py-10 h-[80vh]">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-8">
            Welcome to our platform! We are dedicated to providing innovative
            solutions that enhance efficiency, accessibility, and convenience.
            Our team leverages cutting-edge technologies to create user-friendly
            and secure systems tailored to your needs. Whether you are looking
            for a reliable voting solution, tech support, or creative IT
            services, we are here to help you succeed. Join us on our mission to
            transform challenges into opportunities through technology.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Online Voting System. All rights
            reserved.
          </p>
          <p className="mt-2">designed & developed by BCA-7th sem NCIT</p>
        </div>
      </footer>
    </div>
  );
}
