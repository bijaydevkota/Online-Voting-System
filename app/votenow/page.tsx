import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-100">

      {/* Navbar */}
      <div className="flex justify-between p-2 bg-blue-400 text-white items-center sticky top-0 b z-50">
        <div className="pl-8 py-2">
          <Link href="#" className="bg-red-500 text-white rounded-xl p-2 text-2xl">
            OVS
          </Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
          <Link href="/home" className="hover:text-gray-300">Home</Link>
          <Link href="/blog" className="hover:text-gray-300">Blogs</Link>

         
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

      <div className="space-y-4 h-[72vh]">
      <p className="text-2xl font-semibold text-gray-800 m-6 flex justify-center">Candidates</p>

        
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Candidate 1</h3>
            <p className="text-gray-500">A vision for the future.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Vote</button>
        </div>

      
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Candidate 2</h3>
            <p className="text-gray-500">Building a better tomorrow.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Vote</button>
        </div>

       
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Candidate 3</h3>
            <p className="text-gray-500">Your voice, your choice.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Vote</button>
        </div>
      </div>
   

      
      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
