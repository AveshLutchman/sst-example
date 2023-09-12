"use client"

import Link from "@/components/Link";
import React from "react";

export default function NavBar() {
  return (
    <header>
      <nav className='bg-secondary w-full min-h-[60px]'>
        <NavbarSignedOut />
      </nav>
    </header>
  )
}

function NavbarSignedOut() {

  return (
    <div className="mx-auto max-w-[1440px] flex items-center h-full lg:px-10">
      <div className="flex gap-x-4 ml-20 font-medium">
        <Link href={'/register'} className="w-fit border border-primary text-primary bg-white mx-0 my-4 px-10 py-[0.6rem] rounded-[2rem] border-solid">Sign Up</Link>
        <Link href={'/login'} className="w-fit bg-primary text-[white] mx-0 my-4 px-10 py-[0.6rem] rounded-[2rem] border-[none]">Sign In</Link>
      </div>
    </div>
  )
}
