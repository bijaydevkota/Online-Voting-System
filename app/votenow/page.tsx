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
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
      </div>

    Vote Here



    <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
}
