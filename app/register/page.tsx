import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between p-2 bg-blue-400 text-white sticky top-0 b z-50">
        <div className="pl-8 py-2 items-center">
          <Link href="#" className="p-2 text-2xl bg-red-500 text-white rounded-xl hover:bg-red-400">OVS</Link>
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

      <form className="flex flex-col items-center my-8 py-8 px-8 bg-blue-50  justify-center rounded shadow-2xl  w-5/12 mx-auto space-y-6">
        <div className="flex flex-col gap-2 w-full">
          <p className="flex justify-center text-sm">Note: Only 18+ people are allowed to vote</p>
          <p>Firstname : </p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          
          <p>Middlename : </p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
         
          <p>Lastname : </p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Temporary Address :</p>
          <input className="border rounded border-black w-full py-2" type="text" required />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Permanent Address :</p>
          <input className="border rounded border-black w-full py-2" type="text" required />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Email :</p>
          <input className="border rounded border-black w-full py-2" type="email" placeholder=" eg-bijay123@gmail.com" required />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p>Phone Number :</p>
          <input className="border rounded border-black w-full py-2" type="number" placeholder=" eg-9866666666" required />
        </div>
      
        <div className="flex flex-col gap-2 w-full">
          <p>Date of Birth :</p>
          <input className="border rounded border-black w-full py-2" type="date"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Father&apos;s Name :</p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Mother&apos;s Name :</p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Grandfather&apos;s Name :</p>
          <input className="border rounded border-black w-full py-2" type="text"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Citizenship Number :</p>
          <input className="border rounded border-black w-full py-2" type="number"  required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Upload Citizenship :</p>
          <p>Front-Side :</p>
          <input className="border rounded border-black w-full py-2" type="file" required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Back-Side :</p>
          
          <input className="border rounded border-black w-full py-2" type="file" required/>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Nationality :</p>
          <select name="nationality" id="nationality" className="p-2">
            <option value="nationality">Nepali</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p>Province :</p>
          <select name="nationality" id="nationality" className="p-2">
            <option value="nationality">Bagmati</option>
            <option value="nationality">Sudurpachhim</option>
            <option value="nationality">Gandaki</option>
            <option value="nationality">Lumbini</option>
            <option value="nationality">Janakpur</option>
            <option value="nationality">Karnali</option>
            <option value="nationality">Biratnagar</option>

          </select>
        </div>

        <div className="flex gap-2 w-full">   
          <p>Gender:</p>
          <input className="w-full" type="radio" name="gender"/>
          Male
          <input className="w-full" type="radio" name="gender"/>
          Female
        </div>

       
        
          <button type="submit" className="bg-blue-400 text-xl text-white py-2 px-8 text-center rounded w-full hover:bg-blue-300">
            Sign up
          </button>

          <div className="flex gap-2">
          <p>Already Have An Account ?</p>

          <Link href="/" className="text-blue-500 underline">Log in</Link>
        </div>
     
      </form>

      <footer className="bg-gray-800 text-white py-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Online Voting System. All rights reserved.</p>
          <p className="mt-2">designed & developed by BCA-7th sem NCIT</p>
        </div>
      </footer>
    </div>
  );
}
