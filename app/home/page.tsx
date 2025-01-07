import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Youtube } from 'lucide-react';


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
       
        <div>
        <Link href="/votenow" className="bg-red-500 p-2 rounded-xl text-xl hover:bg-red-400">Vote Now</Link>
        </div>
        </div>
      </nav>


        <div className="flex justify-center p-2 text-center font-bold text-blue-400 w-7/12 mx-auto rounded-xl text-5xl mt-24 font-sans">
        <p className="animate-bounce">What is  an online voting system ?</p>
        </div>
         
       <div className="flex justify-center p-2 text-center text-2xl w-9/12 mx-auto rounded-2xl mt-4">
            <p className="text-2xl font-sans">An online voting system is a software platform that allows groups to securely conduct votes and elections. High-quality online voting systems balance ballot security, accessibility, and the overall requirements of an organization&apos;s voting event.</p>
        </div>

        <div className="flex justify-center mx-auto gap-4 mt-12 p-2">
          <Link href="#" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400 px-7">How To Vote</Link>
          <div className="flex bg-red-600 text-white p-2 rounded-lg hover:bg-red-400 gap-2">
          <Youtube />
          <Link href="#">Watch Demo</Link>
          </div>
        </div>

        <div className="mt-20 w-10/12 mx-auto">
       <Image src="/election2.webp" alt="" width={50} height={50} layout="responsive"/>
        </div>
       
     <div className="flex gap-4 pr-4 pl-4 py-4 mt-24">
        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl">
          <p className="text-3xl font-bold">What is  an online voting system ?</p>
          <p className="text-xl mt-4 animate-pulse">An online voting system is a digital platform that allows voters to cast their votes electronically, either through a web application or a mobile app. It streamlines the voting process by enabling secure, accessible, and convenient participation for users, especially in elections, surveys, or decision-making processes. These systems often use encryption and authentication mechanisms to ensure the integrity and confidentiality of the votes.Using methods like unique voter IDs, passwords, or biometric authentication.</p>
          <button className="bg-red-500 rounded text-white mt-6 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl drop-shadow-xl border border-blue-800">
          <p className="text-3xl font-bold">How does an online voting system ensure security and privacy?</p>
          <p className="text-xl mt-4 animate-pulse">Online voting systems use a variety of security measures to ensure the integrity and privacy of the voting process, such as:

Encryption: To protect the data transmitted and stored, ensuring votes cannot be intercepted or altered.
Authentication: Using methods like unique voter IDs, passwords, or biometric authentication to verify voter identities.
Using methods like unique voter IDs, passwords, or biometric authentication.
</p>
          <button className="bg-red-500 rounded text-white mt-4 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto  bg-blue-400 p-6 text-white rounded-xl">
          <p className="text-3xl font-bold">What are the advantages of using an online voting system?</p>
          <p className="text-xl mt-4 animate-pulse">Online voting systems offer several advantages, such as:

Convenience: Voters can cast their votes from anywhere with internet access, eliminating the need for physical polling stations.
Efficiency: Votes can be counted automatically, significantly speeding up the results process.
Using methods like unique voter IDs, passwords, or biometric authentication.Using methods like unique voter IDs, passwords, or biometric authentication.
</p>
          <button className="bg-red-500 rounded text-white mt-4 w-4/12 mx-auto p-2 shadow-2xl">Learn More</button>
        </div>

        </div>


        <div className="mt-24 w-10/12 mx-auto">
       <Image src="/election.jpg" alt="" width={50} height={50} layout="responsive"/>
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
