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

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Vote for Your Candidate
        </h1>
        <form>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="candidate1"
                name="candidate"
                value="Candidate 1"
              
                className="h-5 w-5 text-blue-500 border-gray-300"
              />
              <label htmlFor="candidate1" className="ml-2 text-lg">
                Candidate 1
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="candidate2"
                name="candidate"
                value="Candidate 2"
               
                className="h-5 w-5 text-blue-500 border-gray-300"
              />
              <label htmlFor="candidate2" className="ml-2 text-lg">
                Candidate 2
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="candidate3"
                name="candidate"
                value="Candidate 3"
                
                className="h-5 w-5 text-blue-500 border-gray-300"
              />
              <label htmlFor="candidate3" className="ml-2 text-lg">
                Candidate 3
              </label>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition duration-300"
             
            >
              Submit Vote
            </button>
          </div>
        </form>
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
