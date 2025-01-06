import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div>


      <nav className="flex justify-between p-2 bg-blue-400 text-white items-center">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
        <Link href="/home">Home</Link>
        <Link href="/blog">Blogs</Link>
        <div>
        <Link href="/votenow" className="bg-red-500 p-2 rounded-xl text-xl hover:bg-red-400">Vote Now</Link>
        </div>
        </div>
      </nav>
        <div className="flex justify-center p-2 text-center font-bold text-blue-400 w-7/12 mx-auto rounded-xl text-5xl mt-24 font-sans">
        <p className="animate-bounce">What is  an online voting system ?</p>
        </div>
         
       <div className="flex justify-center p-2 text-center text-2xl w-9/12 mx-auto rounded-2xl mt-4">
            <p className="text-2xl font-sans animate-pulse">An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization&apos;s voting event.</p>
        </div>

        <div className="mt-24 w-10/12 mx-auto">
       <Image src="/election.jpg" alt="" width={50} height={50} layout="responsive"/>
        </div>
       
     <div className="flex gap-4 pr-4 pl-4 mt-24">
        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl">
          <p className="text-5xl font-bold">What is  an online voting system ?</p>
          <p className="text-2xl mt-4 animate-pulse">An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization&apos;s voting event.</p>
          <button className="bg-red-500 rounded text-white mt-4 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl drop-shadow-2xl">
          <p className="text-5xl font-bold">What is  an online voting system ?</p>
          <p className="text-2xl mt-4 animate-pulse">An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization&apos;s voting event.</p>
          <button className="bg-red-500 rounded text-white mt-4 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl">
          <p className="text-5xl font-bold">What is  an online voting system ?</p>
          <p className="text-2xl mt-4 animate-pulse">An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization&apos;s voting event.</p>
          <button className="bg-red-500 rounded text-white mt-4 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        </div>

       

        <div className="flex flex-col w-10/12 mx-auto mt-16">
          <p className="mt-4">At their core, online voting systems protect the integrity of your vote by preventing voters from being able to vote multiple times. As a digital platform, they eliminate the need to gather in-person, cast votes using paper, or by any other means (e.g. email, insecure survey software).</p>

          <p className="mt-4">You may hear an online voting system being referred to as an online election system, an online e voting system, or electronic voting. These all make reference to the same thing: a secure voting tool that allows your group to collect input from your group and closely scrutinize the results in real time.</p>

          <p className="mt-4">Keep reading for access to the most comprehensive online voting system introduction you will find.</p>

        </div>


        <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
