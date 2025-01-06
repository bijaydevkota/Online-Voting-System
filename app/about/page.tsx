import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>


      <div className="flex justify-between p-2 bg-blue-400 text-white">
        <div className="pl-8 py-2">
          <Link href="#"className="bg-red-500 text-white rounded-xl p-2 text-2xl">OVS</Link>
        </div>
        <div className="flex p-2 gap-10 pr-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </div>
      </div>

      About


    </div>
  );
}
