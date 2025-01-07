import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-100">


      <div className="flex justify-between p-2 bg-blue-400 text-white sticky top-0 b z-50">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>

      <section id="contact" className="bg-gray-100 py-10">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
    <p className="text-lg text-gray-600 text-center mb-8">
      Have any questions or need assistance? Reach out to us, and we’ll get back to you shortly!
    </p>
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label  className="block text-gray-700 font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
           
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>




      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
