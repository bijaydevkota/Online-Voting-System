import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between p-2 bg-blue-400 text-white">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
      </div>

        <div>
        <div className="flex flex-col items-center my-28 py-16 px-4 bg-blue-50  justify-center rounded shadow-2xl  w-3/12 mx-auto space-y-6" >
        <p className="text-2xl bg-blue-400 p-2 rounded-xl text-white">Create a Password</p>
        <div className="flex flex-col gap-2 w-full">
          <p>Enter Password :</p>
          <input className="border rounded border-black w-full py-2" type="password" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Re-enter Password :</p>
          <input className="border rounded border-black w-full py-2" type="password" />
        </div>
        <Link href="/" className="bg-blue-400 text-xl text-center text-white py-2 px-8 rounded w-full hover:bg-blue-300">
            Submit
          </Link>

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
