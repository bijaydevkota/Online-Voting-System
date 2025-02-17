import Link from "next/link";
import React from "react";
import Image from "next/image";
import election1 from "@/public/election1.webp";
import election2 from "@/public/election.jpg";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <nav className="flex justify-between p-2 bg-blue-400 text-white items-center sticky top-0 b z-50">
        <div className="pl-8 py-2">
          <Link
            href="#"
            className="bg-red-500 text-white rounded-xl p-2 text-2xl hover:bg-red-400"
          >
            OVS
          </Link>
        </div>
        <div className="flex p-2 gap-10 pr-8 items-center">
          <Link href="#" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#blog" className="hover:text-gray-300">
            Blogs
          </Link>
          <Link href="#abouthome" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#contacthome" className="hover:text-gray-300">
            Contact
          </Link>

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
      </nav>
      
      <div className="py-16 bg-gradient-to-b from-white via-white to-gray-200">
        <div className="flex justify-center p-2 text-center font-bold w-7/12 mx-auto text-5xl font-sans">
          <p className="bg-gradient-to-b from-white via-white to-sky-400 py-2">
            What is an online voting system ?
          </p>
        </div>

        <div className="flex justify-center p-4 text-center text-2xl w-9/12 mx-auto  mt-8">
          <p className="text-2xl font-sans animate-pulse">
            An online voting system is a software platform that allows groups to
            securely conduct votes and elections. High-quality online voting
            systems balance ballot security, accessibility, and the overall
            requirements of an organization&apos;s voting event.
          </p>
        </div>

        <div className="flex justify-center mx-auto gap-4 mt-12 p-2">
          <Link
            href="/howtovote"
            className="bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 text-white p-2 rounded-lg hover:bg-blue-400 px-7"
          >
            How To Vote
          </Link>
          <Link
            href="/votenow"
            className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-9 p-2 rounded-lg hover:bg-blue-400 "
          >
            Vote Now
          </Link>
        </div>
      </div>

      <div className="mt-20 w-10/12 mx-auto">
        <Image
          src={election1}
          alt=""
          width={50}
          height={50}
          layout="responsive"
        />
      </div>

      <div className="flex gap-4 pr-4 pl-4 py-4 mt-24">
        <div className="flex flex-col text-center w-4/12 mx-auto bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 p-6 text-white rounded-xl shadow-sm">
          <p className="text-3xl font-bold">
            What is an online voting system ?
          </p>
          <p className="text-xl mt-4 animate-pulse">
            An online voting system is a digital platform that allows voters to
            cast their votes electronically, either through a web application or
            a mobile app. It streamlines the voting process by enabling secure,
            accessible, and convenient participation for users, especially in
            elections, surveys, or decision-making processes. These systems
            often use encryption and authentication mechanisms to ensure the
            integrity and confidentiality of the votes.Using methods like unique
            voter IDs, passwords, or biometric authentication.
          </p>
          <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded text-white mt-6 w-4/12 mx-auto p-2">
            Learn More
          </button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 p-6 text-white rounded-xl shadow-xl border">
          <p className="text-3xl font-bold">
            How does an online voting system ensure security and privacy?
          </p>
          <p className="text-xl mt-4 animate-pulse">
            Online voting systems use a variety of security measures to ensure
            the integrity and privacy of the voting process, such as:
            Encryption: To protect the data transmitted and stored, ensuring
            votes cannot be intercepted or altered. Authentication: Using
            methods like unique voter IDs, passwords, or biometric
            authentication to verify voter identities. Using methods like unique
            voter IDs, passwords, or biometric authentication.
          </p>
          <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded text-white mt-4 w-4/12 mx-auto p-2">
            Learn More
          </button>
        </div>

        <div className="flex flex-col text-center w-4/12 mx-auto  bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 p-6 text-white rounded-xl">
          <p className="text-3xl font-bold">
            What are the advantages of using an online voting system?
          </p>
          <p className="text-xl mt-4 animate-pulse">
            Online voting systems offer several advantages, such as:
            Convenience: Voters can cast their votes from anywhere with internet
            access, eliminating the need for physical polling stations.
            Efficiency: Votes can be counted automatically, significantly
            speeding up the results process. Using methods like unique voter
            IDs, passwords, or biometric authentication.Using methods like
            unique voter IDs, passwords, or biometric authentication.
          </p>
          <button className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded text-white mt-4 w-4/12 mx-auto p-2">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-24 w-10/12 mx-auto">
        <Image
          src={election2}
          alt=""
          width={50}
          height={50}
          layout="responsive"
        />
      </div>

      <div className="flex flex-col w-10/12 mx-auto bg-gradient-to-r from-sky-300 via-sky-400 to-sky-600 p-6 pb-8 text-white rounded-xl shadow-sm mt-28">
        <p className="mt-4">
          At their core, online voting systems protect the integrity of your
          vote by preventing voters from being able to vote multiple times. As a
          digital platform, they eliminate the need to gather in-person, cast
          votes using paper, or by any other means (e.g. email, insecure survey
          software).
        </p>

        <p className="mt-4">
          You may hear an online voting system being referred to as an online
          election system, an online e voting system, or electronic voting.
          These all make reference to the same thing: a secure voting tool that
          allows your group to collect input from your group and closely
          scrutinize the results in real time.
        </p>

        <p className="mt-4">
          Keep reading for access to the most comprehensive online voting system
          introduction you will find.
        </p>
      </div>

      <section
        id="abouthome"
        className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 py-24  mt-28 shadow-sm"
      >
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">
            About Us
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed text-center mt-8">
            Welcome to our platform! We are dedicated to providing innovative
            solutions that enhance efficiency, accessibility, and convenience.
            Our team leverages cutting-edge technologies to create user-friendly
            and secure systems tailored to your needs. Whether you are looking
            for a reliable voting solution, tech support, or creative IT
            services, we are here to help you succeed. Join us on our mission to
            transform challenges into opportunities through technology.
          </p>
          <div className="flex justify-center">
            <a
              href="#contacthome"
              className="bg-blue-500 text-gray-300 py-3 px-6 rounded-lg mt-8 font-medium hover:bg-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="blog" className="bg-gray-100 py-10 mt-24">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our Blog
          </h2>
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How to Build a Secure Online Voting System
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the key technologies and best practices for creating a
                  secure and reliable online voting system.
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  The Benefits of Digital Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how digital transformation can enhance productivity,
                  scalability, and customer engagement.
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
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Top 5 Technologies Revolutionizing IT
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest technologies driving innovation in the IT
                  industry and how they can benefit your business.
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

      <section id="contacthome" className="bg-gray-100 py-10 mt-24">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 text-center mt-6">
            Have any questions or need assistance? Reach out to us, and we’ll
            get back to you shortly!
          </p>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Online Voting System. All rights
            reserved.
          </p>
          <p className="mt-2">designed & developed by BCA-7th sem NCIT</p>
        </div>
      </footer>
    </div>
  );
}
