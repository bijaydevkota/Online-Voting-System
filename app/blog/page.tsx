import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-100">


      <div className="flex justify-between p-2 bg-blue-400 text-white sticky top-0 b z-50">
        <div className="pl-8 py-2 itesm-center
        ">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/blog" className="hover:text-gray-300">Blogs</Link>
        <div>
        <Link href="/votenow" className="bg-red-500 p-2 rounded-xl text-xl hover:bg-red-400">Vote Now</Link>
        </div>
        </div>
      </div>


      <section id="blog" className="bg-gray-100 py-10">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Blog</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
     
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/secure.png"
          width={500}
          height={500}
          alt="Blog Post 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">How to Build a Secure Online Voting System</h3>
          <p className="text-gray-600 mb-4">
            Learn the key technologies and best practices for creating a secure and reliable online voting system.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>

     
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/digital.webp"
          width={500}
          height={500}
          alt="Blog Post 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">The Benefits of Digital Transformation</h3>
          <p className="text-gray-600 mb-4">
            Discover how digital transformation can enhance productivity, scalability, and customer engagement.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/top5.webp"
          width={500}
          height={500}
          alt="Blog Post 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Top 5 Technologies Revolutionizing IT</h3>
          <p className="text-gray-600 mb-4">
            Explore the latest technologies driving innovation in the IT industry and how they can benefit your business.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
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
