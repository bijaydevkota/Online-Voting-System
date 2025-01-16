import Link from "next/link";
import React from "react";

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
        <Link href="/votenow" className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-2 rounded-xl text-xl">Vote Now</Link>
        </div>
        </div>
      </nav>




     <div className="w-4/12 mx-auto mt-16">
     <div className="flex flex-col justify-center">

      <p className="flex justify-center font-bold text-2xl text-blue-400 underline">How To Vote</p>
        <div className="mt-12">
        <p className="font-bold">Step 1: Check Your Eligibility</p>
     </div>
     <div className="mt-2">
        <p>Ensure you are eligible to vote in the election or event.</p>
        <p>Confirm you are registered and have the required credentials for online voting.</p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 2: Obtain Access to the Voting System</p>
     </div>
     <div className="mt-2">
        <p>You will likely receive a link or access instructions via email, SMS, or the organization&apos;s website.</p>
        <p>Log in using your unique credentials.</p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 3: Authenticate Your Identity.</p>
     </div>
     <div className="mt-2">
        <p>Multi-factor authentication (e.g., OTP, biometrics, or security questions).</p>
        <p>Uploading or verifying an ID, if required.</p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 4: Navigate to the Voting Section</p>
     </div>
     <div className="mt-2">
        <p>Once logged in, locate the voting page or section on the platform.</p>
        <p>Read any instructions provided about how to cast your vote.
        </p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 5: Review the Candidates/Options</p>
     </div>
     <div className="mt-2">
        <p>Review the list of candidates, parties, or choices available.</p>
        <p>If necessary, click on links or buttons to read more details about each option.
        </p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 6:Cast Your Vote</p>
     </div>
     <div className="mt-2">
        <p>Select your preferred option(s) according to the rules</p>
        <p>Double-check your selection before proceeding.
        </p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 7:Confirm Your Vote</p>
     </div>
     <div className="mt-2">
        <p>Click the Submit or Vote button to cast your ballot.</p>
        <p>Some systems will ask for a final confirmation before submission to avoid errors.
        </p>
     </div>
    </div>
    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 8:Receive Confirmation</p>
     </div>
     <div className="mt-2">
        <p>On-screen message: A confirmation message that your vote has been recorded.</p>
        <p>Email/SMS receipt: Some systems send a receipt or acknowledgment.
        </p>
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 9:Log Out</p>
     </div>
     <div className="mt-2">
        <p>Log out of the system to secure your account.</p>
        
     </div>
    </div>

    <div className="flex flex-col justify-center">
        <div className="mt-4">
        <p className="font-bold">Step 10:Verify Your Vote (Optional)</p>
     </div>
     <div className="mt-2">
        <p>If the system provides a voter verification feature, check to ensure your vote was recorded accurately.</p>
        
     </div>
    </div>
    </div>

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
