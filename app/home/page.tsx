import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>


      <nav className="flex justify-between p-2 bg-blue-400 text-white items-center">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl ">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
        <Link href="/home">Home</Link>
        <Link href="/blog">Blogs</Link>
        <div>
        <Link href="/votenow" className="bg-red-500 p-2 rounded-xl text-xl ">Vote Now</Link>
        </div>
        </div>
      </nav>
        <div className="flex justify-center  text-3xl mt-16 font-sans">
        <p>This is the portal of </p>
        </div>
        <div className="flex justify-center  text-3xl">
            <p className="text-blue-400 text-5xl mt-2">Online Voting System</p>
        </div>



        <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
