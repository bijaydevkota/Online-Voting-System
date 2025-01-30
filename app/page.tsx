import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-between p-2 bg-blue-400 text-white sticky top-0 b z-50">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">OVS</Link>
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

      <form className="flex flex-col items-center my-32 py-12 px-4 bg-blue-50  justify-center rounded shadow-2xl  w-3/12 mx-auto space-y-6">
        <div className="flex flex-col gap-2 w-full">
          <p>Voting ID : </p>
          <input className="border rounded border-black w-full py-2" type="number" placeholder="  Enter your voting id" required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Password :</p>
          <input className="border rounded border-black w-full py-2" type="password" placeholder="  Enter your password" required/>
        </div>

        
          <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-center text-xl text-white py-2 px-8 rounded  w-full hover:bg-blue-300">
            Log in
          </button>
        
        <div className="flex gap-2">
          <p>Don&apos;t have an account?</p>

          <Link href="/register" className="text-blue-500 underline">Register Now</Link>
        </div>
      </form>

      <footer className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
          <p className="mt-2">designed & developed by BCA-7th sem NCIT</p>
        </div>
      </footer>
    </div>
   
  );
}
