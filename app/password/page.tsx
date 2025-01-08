import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-100">
      
      {/* Navbar */}
      <div className="flex justify-between p-2 bg-blue-400 text-white sticky top-0 b z-50">
        <div className="pl-8 py-2 items-center">
          <Link href="#" className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">
            OVS
          </Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <div className="flex items-center">
            <Image
              src="/flag.gif"
              alt="Nepal Flag"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Password Form */}
      <form className="flex flex-col items-center my-28 py-16 px-4 bg-blue-50 justify-center rounded shadow-2xl w-3/12 mx-auto space-y-6">
        <p className="text-2xl bg-blue-400 p-2 rounded-xl text-white">Create a Password</p>
        
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password" className="text-gray-700">Enter Password:</label>
          <input
            id="password"
            className="border rounded border-black w-full py-2 px-3"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="confirm-password" className="text-gray-700">Re-enter Password:</label>
          <input
            id="confirm-password"
            className="border rounded border-black w-full py-2 px-3"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="bg-blue-400 text-xl text-center text-white py-2 px-8 rounded w-full hover:bg-blue-300 transition duration-300">
          Submit
        </button>
      </form>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>
      
    </div>
  );
}
